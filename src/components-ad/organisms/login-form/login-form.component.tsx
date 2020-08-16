import React, { FC, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Title from '../../atoms/title/title.component';
import FormInput from '../../molecules/form-input/form-input.component';
import Button from '../../atoms/button/button.component';

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = (): JSX.Element => {
  return (
    <View>
      <Title size="small" sideBarColor="red">
        ログインする
      </Title>
      <FormInput placeholder="メールアドレス" />
      <FormInput placeholder="パスワード" />
      <Button title="ログイン" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginForm;
