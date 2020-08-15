import React, { FC } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

interface FloatButtonProps {
  /* ボタンのタイトル */
  title: string;
  /* ボタンの背景色 */
  backgroundColor?: 'green' | 'blue';
  /* ボタンのサイズ */
  size?: 'small' | 'medium' | 'large';
  /* trueでボタン使用不可 */
  disabled?: boolean;
  /* ボタンを押した時に実行される関数 */
  onPress?: (event: GestureResponderEvent) => void;
}

const FloatButton: FC<FloatButtonProps> = ({
  title = 'button',
  size = 'medium',
  backgroundColor = 'green',
  disabled = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { ...styles[backgroundColor] },
        disabled ? { backgroundColor: '#A0A0A0' } : null,
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={[styles.title, { ...styles[size] }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // size
  small: {
    fontSize: 18,
  },
  medium: {
    fontSize: 24,
  },
  large: {
    fontSize: 36,
  },
  // backgroundColor
  green: {
    backgroundColor: '#44B97D',
  },
  blue: {
    backgroundColor: '#2196F3',
  },
  container: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    paddingVertical: 7,
    borderRadius: 5,

    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 0,
    shadowOpacity: 1,
    elevation: 2,
  },
  title: {
    color: '#fff',
  },
});

export default FloatButton;
