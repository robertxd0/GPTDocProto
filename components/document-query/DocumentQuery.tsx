import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Button, TextInput, ActivityIndicator } from 'react-native';
import DocumentScanner, { ScanDocumentResponse, ScanDocumentOptions, ScanDocumentResponseStatus, ResponseType } from 'react-native-document-scanner-plugin';
import { ProcessDocumentsAction, DocumentInternalData } from '../../ApiActions/ProcessDocuments';


const DocumentQuery = ({ initialAnswer }: { initialAnswer: string }) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState(initialAnswer);
    const [processingAnswer, setProcessingAnswer] = useState(false);

    const processDocumentsAction = new ProcessDocumentsAction();

    const handleQuestionChange = (text: string) => {
        setQuestion(text);
    };

    const handleSendClick = () => {
        setProcessingAnswer(true);
        processDocumentsAction.queryDocument(question).subscribe(
            (response) => {
                setAnswer(response.response);
                setProcessingAnswer(false);
            },
            (error) => {
                console.log(error);
                setAnswer('A aparut o eroare la procesarea intrebarii.');
                setProcessingAnswer(false);
            });
    };

    return (
        <View>
            <View>
                {/* area for answers */}
                {!processingAnswer ? (
                    <View>
                        <Text>{answer}</Text>
                    </View>
                ) :
                    (
                        <View>
                            <ActivityIndicator />
                        </View>
                    )}
            </View>
            <View>
                {/* area for text input and send button */}
                <TextInput value={question} onChangeText={handleQuestionChange} />
                <Button title="Send" onPress={handleSendClick} />
            </View>
        </View>
    );
};

export default DocumentQuery;