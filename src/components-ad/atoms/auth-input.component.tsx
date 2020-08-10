import React, { useState, FC } from 'react';
import { Text, View } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

interface AuthInputProps {
  placeholder: string;
  error: boolean;

}

const AuthInput: FC<AuthInputProps> = ({placeholder, error}) => {
  const [text, onChangeText] = useState('');
  return (
    <View>
      <TextInput
        style={[styles.authInput, error && styles.errorBorder]}
        onChangeText={(text) => onChangeText(text)}
        value={text}
        placeholder={placeholder}
      />
      {error && <Text style={styles.errText}>エラーです。</Text>}
    </View>
  );
}

export default AuthInput

const styles = StyleSheet.create({
  authInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    height: 40,
    borderColor: '#86939E'
  },
  errorBorder: {
    borderColor: 'red',
  },
  errText: {
    color: 'red',
    fontSize: 14
  },
});
