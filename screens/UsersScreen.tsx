import React from 'react';
import { Text, StyleSheet, Image, View, FlatList, Pressable } from 'react-native';
import Users from '../assets/dummy-data/Users';
import { Auth } from 'aws-amplify';
import UserItem from '../components/UserItem';

export default function UsersScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={Users}
        renderItem={({ item }) => <UserItem user={item} />}
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