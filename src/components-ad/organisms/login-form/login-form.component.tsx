import React, { FC, useState } from 'react';
import { View, StyleSheet } from 'react-native';

interface LoginFormProps {}

import FormInput from '../../molecules/form-input/form-input.component';
import Button from '../../atoms/button/button.component';

const LoginForm: FC<LoginFormProps> = (): JSX.Element => {
  return (
    <View>
      <FormInput placeholder="メールアドレス" />
      <FormInput placeholder="パスワード" />
      <Button title="ログイン" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginForm;
