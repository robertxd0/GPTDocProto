import React, { useState } from 'react';
import { View } from 'react-native';
import Scanner from './components/scanner/Scanner';
import DocumentQuery from './components/document-query/DocumentQuery';

 
const App = () => {

  const [scannedDocResponse, setScannedDocResponse] = useState('' as string);
  
  const handleCompletedScan = async (response: string) => {
    setScannedDocResponse(response);
  };

  return (
    <View style={{ flex: 1 }}>
      {
        scannedDocResponse === '' ? (
          <Scanner onScanComplete={handleCompletedScan}/>
        ) : (
          <DocumentQuery initialAnswer={scannedDocResponse}/>
        )
      }
     
    </View>
  );
};

export default App;