import * as React from 'react';
import { Text, StyleSheet, Image, View, FlatList } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem/';
import chatRoomsData from '../assets/dummy-data/ChatRooms';

const chatRoom0 = chatRoomsData[0];
const chatRoom1 = chatRoomsData[1];
const chatRoom2 = chatRoomsData[2];

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomsData}
        renderItem={({item}) => <ChatRoomItem chatRoom={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'black',
    flex: 1
  }
})