import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Input from '../../atoms/input/input.component';

interface FormInputProps {
  /* inputに入力された値 */
  value?: string;
  /* 入力していないときに表示されるプレイスホルダー */
  placeholder?: string;
  /* エラー時に表示するメッセージ */
  errorMessage?: string;
  /* trueで入力したテキストがドットになる */
  secureTextEntry?: boolean;
  /* inputが入力されるたびに実行される関数 */
  onChangeText?: (text: string) => void;
}

const FormInput: FC<FormInputProps> = ({
  value,
  placeholder,
  errorMessage,
  secureTextEntry,
  onChangeText,
}): JSX.Element => {
  return (
    <>
      <Input
        value={value}
        placeholder={placeholder}
        error={errorMessage ? true : false}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
      <Text style={styles.error}>{errorMessage ? errorMessage : ''}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    marginHorizontal: 10,
    marginVertical: 5,
    height: 12,
    color: 'red',
  },
});

export default FormInput;
