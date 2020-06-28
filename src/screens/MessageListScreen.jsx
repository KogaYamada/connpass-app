import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import useInput from '../hooks/useInput';
import MessageItem from '../components/MessageItem';

const MessageListScreen = () => {
  const term = useInput('');
  return (
    <>
      <View style={{ borderColor: 'black', borderWidth: 1 }}>
        <View style={styles.search}>
          <Icon
            type="font-awesome"
            name="search"
            size={20}
            style={{ marginLeft: 10, marginTop: 1 }}
            color="grey"
          />
          <TextInput style={styles.TextInput} placeholder=" 送信者名で検索" />
        </View>
      </View>
      <ScrollView>
        <Card containerStyle={{ margin: 0, padding: 0 }}>
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
        </Card>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#E0E0E0',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    margin: 15,
    height: 25,
    display: 'flex',
    flexDirection: 'row',
  },
  TextInput: {
    lineHeight: 25,
    fontSize: 20,
    paddingLeft: 1,
    width: 300,
  },
});

MessageListScreen.navigationOptions = {
  title: 'メッセージ',
};

export default MessageListScreen;
