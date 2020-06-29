import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';
import { Avatar } from 'react-native-elements';

export default {
  /**
   * メッセージをレンダリングするメソッド
   */
  renderItem: ({ item }) => (
    <TouchableHighlight
      onPress={() => console.log('You touched me')}
      style={styles.rowFront}
      underlayColor={'#F0F0F0'}
    >
      <View style={styles.messageItem}>
        <Avatar style={{ flex: 2 }} />
        <View
          style={{
            flex: 8,
            paddingHorizontal: 5,
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 4,
              flex: 1,
            }}
          >
            <Text style={styles.header}>{item.sender}</Text>
            <Text>{item.date} ＞ </Text>
          </View>
          <View style={{ flex: 2 }}>
            <Text style={{ fontSize: 12 }}>{item.content}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  ),
  /**
   * スワイプ時に出てくる要素をレンダリングするメソッド
   */
  renderHiddenItem: (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={{
          bottom: 0,
          position: 'absolute',
          top: 0,
          width: 75,
          backgroundColor: '#FFFFFF',
        }}
        onPress={() => console.log(rowMap)}
      >
        <View style={{ backgroundColor: '#FFFFFF' }} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => console.log(rowMap)}
      >
        <Text style={styles.backTextWhite}>削除</Text>
      </TouchableOpacity>
    </View>
  ),
  /**
   * スワイプして開かれた要素のに処理を行うメソッド
   */
  onRowDidOpen: (rowKey) => {
    console.log('This row opened', rowKey);
  },
  /**
   * スワイプして開かれる幅
   */
  rightOpenValue: -75,
};

const styles = StyleSheet.create({
  backTextWhite: {
    color: '#FFFFFF',
    fontSize: 22,
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    height: 90,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#FF7450',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: '#FF7450',
    right: 0,
  },
  messageItem: {
    height: 90,
    borderBottomWidth: 1,
    borderBottomColor: '#707070',
    display: 'flex',
    flexDirection: 'row',
  },
  header: {
    fontSize: 18,
    fontWeight: '400',
  },
});
