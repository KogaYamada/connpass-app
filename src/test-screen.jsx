import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RadioButton from './components-ad/atoms/radio-button/radio-button.components';

const TestScreen = () => {
  return (
    <View style={styles.screen}>
      <RadioButton />
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
