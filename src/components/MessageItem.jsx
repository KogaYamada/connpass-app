import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Text } from 'react-native-elements';

const MessageItem = () => {
  return (
    <View style={styles.messageItem}>
      <View
        style={{
          width: 90,
          height: 75,
          borderWidth: 1,
          borderColor: '#000000',
        }}
      ></View>
      <View style={{ paddingHorizontal: 5 }}>
        <Text h4>イベント名</Text>
        <Text>
          イベント内容です。イベント内容です。イベント内容です。イベント内容です。イベント内容です。イベント内容です。
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageItem: {
    height: 90,
    borderBottomWidth: 1,
    borderBottomColor: '#666666',
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default MessageItem;
