import * as React from 'react';
import { Text, StyleSheet, Image, View, FlatList } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import chatRoomsData from '../assets/dummy-data/ChatRooms';

export default function HomeScreen() {
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