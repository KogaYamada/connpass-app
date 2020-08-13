import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressBar from './components-ad/molecules/progress-bar.components';

const TestScreen = () => {
  return <View style={styles.screen}>
    <ProgressBar />
  </View>;
};

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
