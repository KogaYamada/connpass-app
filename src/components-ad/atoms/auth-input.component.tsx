import React, { useState, FC } from 'react';
import { Text, View } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

interface AuthInputProps {
  placeholder?: string;
  errMesage?: string;
  secureTextEntry?: boolean;
}

const AuthInput: FC<AuthInputProps> = ({
  placeholder,
  errMesage = '',
  secureTextEntry,
}) => {
  const [text, onChangeText] = useState('');
  return (
    <View>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={[
          styles.authInput,
          errMesage.trim() !== '' && styles.errorBorder,
        ]}
        onChangeText={(text) => onChangeText(text)}
        value={text}
        placeholder={placeholder}
      />
      {errMesage.trim() !== '' && (
        <Text style={styles.errText}>{errMesage}</Text>
      )}
    </View>
  );
};

export default AuthInput;

const styles = StyleSheet.create({
  authInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 7,
    height: 48,
    borderColor: '#DBDBDB',
    backgroundColor: '#FBFBFB',
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
