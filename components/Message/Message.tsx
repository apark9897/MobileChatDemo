import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const blue = '#3777f0';
const gray = '#dedede';

const myID = 'u1';


const Message = ({ message }) => {

  const isMe = message.user.id === myID;

  return (
    <View style={[styles.container, isMe ? styles.rightContainer : styles.leftContainer]}>
      <Text style={{ color: isMe ? 'black' : 'white' }}>{message.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3777f0',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: '75%'
  },
  rightContainer: {
    backgroundColor: gray,
    marginLeft: 'auto',
    marginRight: 10
  },
  leftContainer: {
    backgroundColor: blue,
    marginLeft: 10,
    marginRight: 'auto'
  }
})

export default Message;