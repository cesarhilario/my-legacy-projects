import React from  'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = (props) => {
  const { label, handler } = props;
  
  function handlePress() {
    handler();
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196f3',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 30,
    marginVertical: 20
  },
  buttonText: {
    color: '#EEE',
    fontSize: 16,
    fontWeight: "900"
  }
});

export default Button;