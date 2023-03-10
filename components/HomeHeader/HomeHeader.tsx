import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeHeader = (props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.profilePicture}>
        <Image
          source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png' }}
          style={{
            width: 30,
            height: 30,
            borderRadius: 30
          }} />
      </View>
      <View style={styles.headerText}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Home</Text>
      </View>
      <View style={styles.headerIconContainer}>
        <Feather name="camera" size={24} color="white" style={{ paddingHorizontal: 12 }} />
        <Pressable onPress={() => navigation.navigate('UsersScreen')}>
          <Feather name="edit-2" size={24} color="white" style={{ paddingHorizontal: 2 }} />
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center'
  },
  profilePicture: {
    flex: 1,
  },
  headerText: {
    flex: 1,
    alignItems: 'center',
  },
  headerIconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});


export default HomeHeader;