import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RadioGroup from './components-ad/molecules/radio-graoup/radio-group.components';

const TestScreen = () => {
  return (
    <View style={styles.screen}>
      <RadioGroup />
    </View>
  );
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
