import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Image, View, FlatList, Pressable } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import { Auth, DataStore } from 'aws-amplify';
import { ChatRoom } from '../src/models';

const signOut = async () => {
  try {
    await Auth.signOut({ global: true });
  } catch (error) {
    console.log('error signing out: ', error);
  }
};

export default function HomeScreen() {
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);

  useEffect(() => {
    const fetchChatRooms = async () => {
      const chatRooms = await DataStore.observeQuery(ChatRoom).subscribe((snapshot) => {
        const { items, isSynced } = snapshot;
        setChatRooms(items);
      });
      
    };
    fetchChatRooms();
  }, [])

  return (
    <View style={styles.page}>
      <Pressable onPress={signOut} style={styles.signOut}>
        <Text>Logout</Text>
      </Pressable>
      <FlatList
        data={chatRooms}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'black',
    flex: 1
  },
  signOut: {
    backgroundColor: 'red',
    height: 50,
    margin: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})