import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { DataStore } from 'aws-amplify';
import { User } from '../src/models'
import UserItem from '../components/UserItem';

export default function UsersScreen() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const subscription = DataStore.observeQuery(User).subscribe(snapshot => {
      const { items, isSynced } = snapshot;
      setUsers(items);
    });
  }, [])

  return (
    <View style={styles.page}>
      <FlatList
        data={users}
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