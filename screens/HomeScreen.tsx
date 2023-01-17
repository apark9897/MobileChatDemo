import * as React from 'react';
import { Text, StyleSheet, Image, View, FlatList, Pressable } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import chatRoomsData from '../assets/dummy-data/ChatRooms';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { Auth } from 'aws-amplify';

const signOut = async () => {
  try {
    await Auth.signOut({ global: true });
  } catch (error) {
    console.log('error signing out: ', error);
  }
};

function SignOutButton() {
  return (
    <Pressable onPress={signOut} style={styles.signOut}>
      <Text>Logout</Text>
    </Pressable>
  );
}

export default function HomeScreen() {
  return (
    <View style={styles.page}>
      <Pressable onPress={signOut} style={styles.signOut}>
        <Text>Logout</Text>
      </Pressable>
      <FlatList
        data={chatRoomsData}
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