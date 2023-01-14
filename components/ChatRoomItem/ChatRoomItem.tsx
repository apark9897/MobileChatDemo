import React from 'react';

import { Text, StyleSheet, Image, View } from 'react-native';
import styles from './styles';

export default function ChatRoomItem() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }} style={styles.image} />
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>1</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>Coolguy</Text>
          <Text style={styles.text}>12:15 PM</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>Hello hello my dear</Text>
      </View>
    </View>
  )
}
