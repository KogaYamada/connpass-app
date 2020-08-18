import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { signup } from '../../../stores/user';
import useInput from '../../../hooks/useInput';

import Title from '../../atoms/title/title.component';
import FormInput from '../../molecules/form-input/form-input.component';
import Button from '../../atoms/button/button.component';
import Progress from '../../molecules/progress-bar.components';
import Text from '../../atoms/text.components';

interface SigninFormProps {}

const SigninForm: FC<SigninFormProps> = () => {
  const dispatch = useDispatch();
  const username = useInput('');
  const email = useInput('');
  const password = useInput('');
  const confirmPassword = useInput('');
  const handleSubmit = () => {
    // signup(username, email, password);
    username.addErrorMessage('error');
    email.addErrorMessage('こんにちは');
    password.addErrorMessage('エラーのテストです');
    confirmPassword.addErrorMessage('hello');
  };
  return (
    <View>
      <FormInput
        value={username.value}
        placeholder="ユーザー名"
        errorMessage={username.errorMessage}
        onChangeText={username.onChangeText}
      />
      <FormInput
        value={email.value}
        placeholder="メールアドレス"
        errorMessage={email.errorMessage}
        onChangeText={email.onChangeText}
        secureTextEntry
      />
      <FormInput
        value={password.value}
        placeholder="パスワード"
        errorMessage={password.errorMessage}
        onChangeText={password.onChangeText}
      />
      <FormInput
        value={confirmPassword.value}
        placeholder="パスワード(確認)"
        errorMessage={confirmPassword.errorMessage}
        onChangeText={confirmPassword.onChangeText}
        secureTextEntry
      />
      <Button title="次のステップに進む" onPress={handleSubmit} />
    </View>
  );
};

export default SigninForm;
