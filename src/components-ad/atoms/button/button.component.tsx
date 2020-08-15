import React, { FC } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';

interface ButtonProps {
  /* ボタンのタイトル */
  title?: string;
  /* ボタンの色 */
  color?: string;
  /* ボタンを押したときに実行される関数 */
  onPress?: (event: GestureResponderEvent) => void;
}

const Button: FC<ButtonProps> = ({ title, color, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  /* ボタン本体のスタイル */
  button: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#EEEEEE',
  },
  /* ボタンのテキストのスタイル */
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Button;
