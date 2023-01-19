import React, { useEffect } from 'react';

import { Text, StyleSheet, Image, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { ChatRoom, User, ChatRoomUser } from '../../src/models';
import { Auth, DataStore } from 'aws-amplify';

export default function UserItem({ user }) {
  const navigation = useNavigation();

  const onPress = async () => {
    try {
      // Create a chat room
      const newChatRoom = await DataStore.save(new ChatRoom({ newMessages: 0 }));

      // connect auth user with chat room
      const authUser = await Auth.currentAuthenticatedUser();
      const dbUser = await DataStore.query(User, authUser.attributes.sub);
      console.log(dbUser);
      if (dbUser) {
        await DataStore.save(new ChatRoomUser({
          chatRoom: newChatRoom,
          user: dbUser
        }))

        // connect clicked user with chat room
        await DataStore.save(new ChatRoomUser({
          chatRoom: newChatRoom,
          user
        }))

        console.log('linked users to chatroom');
      }

      navigation.navigate('ChatRoom', { id: newChatRoom.id });
    } catch (err) {
      console.log('failed to create chatroom', err);
    }
  }

  useEffect(() => {
    // const printAuthUser = async () => {
    //   const user = await Auth.currentAuthenticatedUser();
    //   console.log(user);
    // }
    // printAuthUser();
  })

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{ uri: user.imageUri }} style={styles.image} />
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
        </View>
      </View>
    </Pressable>
  )
}
