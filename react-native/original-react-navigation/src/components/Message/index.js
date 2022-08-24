import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Message = ({ screen }) => {
  return (
    <Text style={styles.message}>Você está na tela {screen}</Text>
  )
}

const styles = StyleSheet.create({
  message: {
    fontSize: 20
  }
})

export default Message;