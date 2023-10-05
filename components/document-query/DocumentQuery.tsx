import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Button, TextInput, ActivityIndicator } from 'react-native';
import DocumentScanner, { ScanDocumentResponse, ScanDocumentOptions, ScanDocumentResponseStatus, ResponseType } from 'react-native-document-scanner-plugin';
import { ProcessDocumentsAction, DocumentInternalData } from '../../ApiActions/ProcessDocuments';
import { Chat, MessageType, User } from '@flyerhq/react-native-chat-ui'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AgentChat, { AgentChatProps } from '../agent-chat/AgentChat';
import { Message } from '../agent-chat/Interfaces';

// For the testing purposes, you should probably use https://github.com/uuidjs/uuid
const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.floor(Math.random() * 16)
        const v = c === 'x' ? r : (r % 4) + 8
        return v.toString(16)
    })
}


const DocumentQueryChat = ({ initialAnswer }: { initialAnswer: string }) => {

    const [processingAnswer, setProcessingAnswer] = useState(false);
    const [messages, setMessages] = useState<Message[]>([])

    const processDocumentsAction = new ProcessDocumentsAction();
    const user: User = { id: '06c33e8b-e835-4736-80f4-63f44b66666c', firstName: 'User', }
    const agent: User = { id: '07c34e9d-e845-4493-8000-24f44b78966d', firstName: 'Agent', }

    const addMessage = (message: Message) => {
        setMessages(prevMessages => [message, ...prevMessages]);
    }

    useEffect(() => {
        addAgentAnswer(initialAnswer);
    }, []);

    const addAgentAnswer = (answer: string) => {
        const message: Message = {
            sender: 'agent',
            id: Date.now(),
            type: 'text',
            content: answer,
        };

        addMessage(message);
    }

    const askQuestion = (question: string) => {
        let activeSub = processDocumentsAction.queryDocument(question).subscribe(
            (response) => {
                addAgentAnswer(response.response);
            },
            (error) => {
                addAgentAnswer('A aparut o eroare la procesarea intrebarii.');
                activeSub.unsubscribe();
            },
            () => {
                activeSub.unsubscribe();
            });
    }

    const handleSendPress = (message: Message) => {
        addMessage(message)
        askQuestion(message.content);
    }

    return (
        <SafeAreaProvider>
            <AgentChat
                messages={messages}
                onSendPress={handleSendPress}
            />
        </SafeAreaProvider>
    )


};

export default DocumentQueryChat;