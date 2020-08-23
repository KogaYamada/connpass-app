import React, { FC } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

interface InputProps {
  /* inputに入力された値 */
  value?: string;
  /* 入力していないときに表示されるプレイスホルダー */
  placeholder?: string;
  /* trueでエラー表示 */
  error?: boolean;
  /* trueで入力したテキストがドットになる */
  secureTextEntry?: boolean;
  /* inputが入力されるたびに実行される関数 */
  onChangeText?: (text: string) => void;
}

const Input: FC<InputProps> = ({
  value,
  placeholder,
  error,
  secureTextEntry,
  onChangeText,
}) => {
  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      style={[styles.authInput, error && styles.errorBorder]}
      onChangeText={onChangeText ? (text) => onChangeText(text) : () => {}}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  authInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 7,
    height: 48,
    borderColor: '#DBDBDB',
    backgroundColor: '#F2F2F2',
    padding: 10,
    fontSize: 18,
  },
  errorBorder: {
    borderColor: 'red',
  },
  errText: {
    color: 'red',
    fontSize: 14,
    paddingVertical: 7,
    paddingHorizontal: 5,
  },
});
