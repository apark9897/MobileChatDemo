import * as React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem/';

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <ChatRoomItem></ChatRoomItem>
      <ChatRoomItem></ChatRoomItem>
      <ChatRoomItem></ChatRoomItem>
      <ChatRoomItem></ChatRoomItem>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'black',
    flex: 1
  }
})