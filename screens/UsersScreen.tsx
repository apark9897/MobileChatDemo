import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { DataStore } from '@aws-amplify/datastore';
import { Users } from '../src/models'
import UserItem from '../components/UserItem';

export default function UsersScreen() {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await DataStore.query(Users);
      setUsers(fetchedUsers);
    };
    fetchUsers();
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