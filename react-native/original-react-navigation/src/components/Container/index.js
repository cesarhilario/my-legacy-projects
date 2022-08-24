import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

const Container = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      { props.children }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Container;