import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Message from '../components/Message';
import chatRoomData from '../assets/dummy-data/Chats';
import MessageInput from '../components/MessageInput';
import { useNavigation } from '@react-navigation/native';

export default function ChatRoomScreen() {
  const route = useRoute();

  console.warn(route.params);
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({item}) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'black',
    flex: 1
  }
});