import { Observable } from "rxjs";
import { RestAdapter, FileUpload } from "./adapters/RestAdapter";


export interface DocumentInternalData {
    uri: string;
    name: string;
    type: string;
}

export interface DocumentUploadResponse {
    response: string;
}

export interface DocumentQueryRequest {
    query: string;
}

export interface DocumentQueryResponse {
    response: string;
}

export class ProcessDocumentsAction extends RestAdapter {
    public processDocuments(documents: DocumentInternalData[]): Observable<DocumentUploadResponse> {
        const uploadData = {
            documents: documents,
            paramName: 'files',
        };
        return this.postFiles<DocumentUploadResponse>('document/upload', uploadData);
    }

    public queryDocument(query: string): Observable<DocumentQueryResponse> {
        const queryData = {
            query: query,
        };
        return this.get<DocumentQueryResponse>('document/query', queryData);
    }

    public test(): Observable<any> {
        return this.get<any>('document/test');
    }
}