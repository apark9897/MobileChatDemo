import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import styles from './styles';


const ChatRoomHeader = ({ navigation, route, options, back }) => {
  const chatName = options.title;

  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.leftContainer}>
        <Pressable onPress={navigation.goBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </Pressable>
        <Image
          source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png' }}
          style={styles.profilePicture} />
        <Text style={styles.chatName}>{chatName}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name="md-videocam" size={24} color="white" style={styles.icon} />
        <FontAwesome name="phone" size={24} color="white" style={styles.icon} />
        <SimpleLineIcons name="options-vertical" size={20} color="white" style={styles.icon} />
      </View>
    </SafeAreaView>
  )
}

export default ChatRoomHeader;