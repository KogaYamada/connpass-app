import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "./components-ad/atoms/button.component";
const TestScreen = () => {
  return <View style={{ backgroundColor: "red" }}>
    <Button color="#fff" title="ログイン" />
  </View>;
};

const styles = StyleSheet.create({});

export default TestScreen;
