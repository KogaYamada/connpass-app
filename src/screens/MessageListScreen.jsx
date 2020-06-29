import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { SwipeListView } from 'react-native-swipe-list-view';
import MessageItem from '../components/MessageItem';
import useInput from '../hooks/useInput';

//test data
import testData from '../testMessage';

const MessageListScreen = () => {
  const search = useInput('');

  return (
    <View style={styles.container}>
      <SearchBar placeholder="送信者名で検索" platform="ios" {...search} />
      <SwipeListView
        disableRightSwipe
        keyExtractor={(testData) => testData.key}
        data={testData}
        {...MessageItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

MessageListScreen.navigationOptions = {
  title: 'メッセージ',
};

export default MessageListScreen;
