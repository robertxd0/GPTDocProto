import { Config } from '../../config/Config';
import { Observable, Observer, from } from 'rxjs';
import { map } from 'rxjs/operators';
import axios, { AxiosRequestConfig } from 'axios';
import { DocumentInternalData } from '../ProcessDocuments';
import RNFetchBlob from 'rn-fetch-blob';


export type FileUpload = {
  documents: DocumentInternalData[];
  paramName?: string;
};

export abstract class RestAdapter {
  protected baseUrl: string;
  protected authToken: string;

  constructor() {
    const config = Config.get();
    this.baseUrl = config.backendUrl;
    this.authToken = config.authToken;
  }

  protected get<T>(path: string, queryParams?: any): Observable<T> {
    const config: AxiosRequestConfig = {
      headers: {
        // Authorization: `Bearer ${this.authToken}`,
      },
      params: queryParams,
    };
    const axiosGet = axios.get<T>(`${this.baseUrl}${path}`, config);
    axiosGet.then(
      (response) => response.data)
      .catch((error) => {
        console.log(error);
      });
    return from(axios.get<T>(`${this.baseUrl}${path}`, config).then((response) => response.data));
  }

  protected postFiles<T>(path: string, fileUpload: FileUpload): Observable<T> {

    const files = fileUpload.documents.map((document) => {
      return {
        name: fileUpload.paramName,
        filename: document.name,
        type: `${document.type}`,
        data: RNFetchBlob.wrap(document.uri),
      };
    });

    return Observable.create((observer: Observer<T>) => {

      const config = {
        trusty: true,
        timeout: 240000, // 60 seconds
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      RNFetchBlob.config(config).fetch(
        'POST',
        `${this.baseUrl}${path}`,
        {
          'Content-Type': 'image/jpeg',
        },
        files,
      )
        .then(res => {
          if (typeof res.text() === 'string') {
            const response: T = JSON.parse(res.text() as string) as T;
            observer.next(response);
            observer.complete();
          }
        })
        .catch(err => {
          observer.error(err);
        });
    });
  }

  protected put<T>(path: string, body: any): Observable<T> {
    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.authToken}`,
      },
    };
    return from(axios.put<T>(`${this.baseUrl}${path}`, body, config).then((response) => response.data));
  }
}