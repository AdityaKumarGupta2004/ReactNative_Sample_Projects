import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Button, StyleSheet, SafeAreaView } from 'react-native';

export default function AppChat() {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hey there!', sender: 'Friend' },
    { id: '2', text: 'Hello! How are you?', sender: 'You' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() === '') return;
    const newMsg = {
      id: Date.now().toString(),
      text: input,
      sender: 'You',
    };
    setMessages([...messages, newMsg]);
    setInput('');
  };

  const renderItem = ({ item }) => (
    <View style={[
      styles.messageContainer,
      item.sender === 'You' ? styles.myMessage : styles.theirMessage
    ]}>
      <Text style={styles.sender}>{item.sender}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>WhatsApp Clone</Text>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type a message"
          value={input}
          onChangeText={setInput}
          style={styles.input}
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
  messageList: { flex: 1 },
  messageContainer: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  myMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  theirMessage: {
    backgroundColor: '#E2E2E2',
    alignSelf: 'flex-start',
  },
  sender: { fontWeight: 'bold', marginBottom: 3 },
  text: { fontSize: 16 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    paddingTop: 5,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
});
