import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TextComponent from "./components-ad/atoms/text.components";
const TestScreen = () => {
  return (<View style={styles.screen}>
    <TextComponent />
  </View>);
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
