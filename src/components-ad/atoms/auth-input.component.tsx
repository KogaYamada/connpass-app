import React, { useState, FC } from 'react';
import { Text, View } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

interface AuthInputProps {
  placeholder: string;
  errMesage: string;
}

const AuthInput: FC<AuthInputProps> = ({placeholder, errMesage = ''}) => {
  const [text, onChangeText] = useState('');
  return (
    <View>
      <TextInput
        style={[styles.authInput, errMesage.trim() !== '' && styles.errorBorder]}
        onChangeText={(text) => onChangeText(text)}
        value={text}
        placeholder={placeholder}
      />
      {errMesage.trim() !== '' && <Text style={styles.errText}>{errMesage}</Text>}
    </View>
  );
}

export default AuthInput

const styles = StyleSheet.create({
  authInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 7,
    height: 40,
    borderColor: '#707070',
    backgroundColor: '#EBEBEB',
  },
  errorBorder: {
    borderColor: 'red',
  },
  errText: {
    color: 'red',
    fontSize: 14
  },
});
