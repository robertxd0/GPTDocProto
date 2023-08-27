import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Button, ActivityIndicator } from 'react-native';
import DocumentScanner, { ScanDocumentResponse, ScanDocumentOptions, ScanDocumentResponseStatus, ResponseType } from 'react-native-document-scanner-plugin';
import { ProcessDocumentsAction, DocumentInternalData } from '../../ApiActions/ProcessDocuments';
import { on } from 'events';


type ScannerProps = {
  onScanComplete: (response: string) => void;
};

const Scanner = ({ onScanComplete }: ScannerProps) => {
  const [scannedImages, setScannedImage] = useState([] as string[]);
  const [scanning, setScanning] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleScan = async () => {
    setScanning(true);
    const scannedImage: ScanDocumentResponse = await DocumentScanner.scanDocument({
      letUserAdjustCrop: true,
      croppedImageQuality: 100,
      responseType: ResponseType.ImageFilePath,

    } as ScanDocumentOptions);
    setScanning(false);

    if (scannedImage.status === ScanDocumentResponseStatus.Success && scannedImage.scannedImages) {
      setScannedImage(scannedImage.scannedImages);
    }
  };

  const processDocumentsAction = new ProcessDocumentsAction();

  const handleRetake = () => {
    setScannedImage([]);
    setScanning(false);
  };

  const handleUpload = async () => {
    try {
      if (scannedImages.length > 0) {
        setProcessing(true);
        const documents: DocumentInternalData[] = [];

        for (let scannedImage of scannedImages) {
          const filename = scannedImage.split('/').pop();
          const extension = filename?.split('.').pop();

          const documentInternalData: DocumentInternalData = {
            uri: scannedImage,
            name: filename || 'test',
            type: 'image/jpeg',
          };

          documents.push(documentInternalData);
        }

        processDocumentsAction.processDocuments(documents).subscribe((response) => {
          console.log(response.response);
          onScanComplete(response.response);
        },
          (error) => {
            console.log(error);
            let x = 1;
          });

      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {scannedImages.length > 0 ? (
        <View style={{ flex: 1 }}>
          {!processing ? (
            <View>
              <Button title="Trimite" onPress={handleUpload} />
              <Button title="Incearca din nou" onPress={handleRetake} />
              <Image
                resizeMode="contain"
                style={{ flex: 1 }}
                // source={{ uri: `data:image/jpeg;base64,${scannedImage}`}}
                source={{ uri: scannedImages[0] }}
              />
            </View>
          ) :
            (
             <View>
              <ActivityIndicator />
            </View>
          )}
        </View>
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {scanning ? (
            <Text>Scanning...</Text>
          ) : (
            <TouchableOpacity onPress={handleScan}>
              <Text>Scaneaza Document</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default Scanner;