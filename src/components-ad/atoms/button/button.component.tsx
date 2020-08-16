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
  /* ボタンのサイズ */
  size?: 'small' | 'middle' | 'large';
  /* ボタンの色 */
  color?: string;
  /* ボタンを押したときに実行される関数 */
  onPress?: (event: GestureResponderEvent) => void;
}

const Button: FC<ButtonProps> = ({
  title,
  size = 'middle',
  color,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles.button, styles[size]]} onPress={onPress}>
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  /* ボタン本体のスタイル */
  button: {
    borderColor: '#DBDBDB',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#F2F2F2',
  },
  /* ボタンのテキストのスタイル */
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  /* ボタンのサイズ */
  small: {
    maxWidth: 150,
    paddingVertical: 10,
  },
  middle: {
    maxWidth: 250,
    minWidth: 150,
    paddingVertical: 13,
  },
  large: {
    minWidth: 250,
    paddingVertical: 17,
  },
});

export default Button;
