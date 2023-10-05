import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Message } from './Interfaces';
import _ from lodash;

export interface AgentChatProps {
    messages: Message[];
    onSendPress: (message: Message) => void;
}

interface AgentChatState{
    inputText: string;
}

export default class AgentChat extends Component<AgentChatProps, AgentChatState> {

    constructor(props: AgentChatProps) {
        super(props);
        this.state = {
            inputText: '',
        };
    }
    

    renderItem = ({ item }: { item: Message }) => {
        const messageStyle = item.sender === 'agent' ? styles.messageBoxAgent : styles.messageBoxUser;

        return (
            <View key={item.id} style={messageStyle}>
                {item.type === 'text' ? (
                    <Text style={styles.messageText}>{item.content}</Text>
                ) : (
                    <Image source={{ uri: item.content }} style={styles.messageImage} />
                )}
            </View>
        );
    }

    handleSendPress = () => {
        const message: Message = {
            id: Date.now(),
            type: 'text',
            content: this.state.inputText,
            sender: 'user'
        };
        this.props.onSendPress(message);
    }

    handleTextChange = (text: string) => {
        _.debounce(() => {
            this.setState({ inputText: text });
        }, 500);
    }


    render() {
        return (
            <View style={styles.mainContainer}>
                <FlatList
                    style={styles.messageContainer}
                    data={this.props.messages}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    inverted={true}
                />
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={}
                        onEndEditing={(text) => this.setState({ inputText: text.nativeEvent.text })}
                    />
                    <TouchableOpacity style={styles.sendButton} onPress={this.handleSendPress}>
                        <Text style={styles.sendButtonText}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    messageContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f1f1f1',
    },
    messageBoxAgent: {
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    messageBoxUser: {
        alignSelf: 'flex-end',
        backgroundColor: '#007aff',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    messageText: {
        fontSize: 16,
    },
    messageImage: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        padding: 10,
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginRight: 10,
        paddingHorizontal: 10,
    },
    sendButton: {
        backgroundColor: '#007aff',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});
