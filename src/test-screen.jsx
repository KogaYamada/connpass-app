import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Label from './components-ad/atoms/label/label.components';

const TestScreen = () => {
  return <View style={styles.screen}><Label />
  </View>;

}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    height: 1000,
    padding: 10,
  },
  margin: {
    marginVertical: 20,
  },
});

export default TestScreen;
