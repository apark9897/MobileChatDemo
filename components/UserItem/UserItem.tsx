import React from 'react';

import { Text, StyleSheet, Image, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { DataStore } from '@aws-amplify/datastore';
import { ChatRooms, Users, UsersChatRooms } from '../../src/models';
import { Auth } from 'aws-amplify';

export default function UserItem({ user }) {
  const navigation = useNavigation();

  const onPress = async () => {
    try {
      // Create a chat room
      const newChatRoom = await DataStore.save(new ChatRooms({ newMessages: 0 }));

      // connect auth user with chat room
      const authUser = await Auth.currentAuthenticatedUser();
      const dbUser = await DataStore.query(Users, authUser.attributes.sub);
      if (dbUser) {
        await DataStore.save(new UsersChatRooms({
          users: dbUser,
          chatRooms: newChatRoom
        }))

        // connect clicked user with chat room
        await DataStore.save(new UsersChatRooms({
          users: user,
          chatRooms: newChatRoom
        }))
      }

      navigation.navigate('ChatRoom', { id: newChatRoom.id });
    } catch (err) {
      console.log('failed to create chatroom', err);
    }

  }
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
