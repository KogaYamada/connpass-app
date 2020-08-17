import React, { FC, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { signin } from '../../../stores/user';
import useInput from '../../../hooks/useInput';

import Title from '../../atoms/title/title.component';
import FormInput from '../../molecules/form-input/form-input.component';
import Button from '../../atoms/button/button.component';

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = (): JSX.Element => {
  const dispatch = useDispatch();
  const email = useInput('');
  const password = useInput('');
  const handleSubmit = () => {
    // signin(email, password);
    email.addErrorMessage('こんにちは');
    password.addErrorMessage('エラーのテストです');
  };
  return (
    <View>
      <Title size="small" sideBarColor="red">
        ログインする
      </Title>
      <FormInput
        value={email.value}
        placeholder="メールアドレス"
        errorMessage={email.errorMessage}
        onChangeText={email.onChangeText}
      />
      <FormInput
        value={password.value}
        placeholder="パスワード"
        errorMessage={password.errorMessage}
        onChangeText={password.onChangeText}
        secureTextEntry
      />
      <Button title="ログイン" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginForm;
