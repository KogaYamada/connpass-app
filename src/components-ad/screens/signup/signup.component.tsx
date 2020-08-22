import React from 'react';
import { View } from 'react-native';

import Title from '../../atoms/title/title.component';
import Progress from '../../molecules/progress-bar.components';
import Text from '../../atoms/text.components';
import SignupForm from '../../organisms/signup-form/signup-form.component';
import SigninForm from '../../organisms/signup-form/signup-form.component';

const Signup = () => {
  return (
    <View>
      <Title>新規会員登録</Title>
      {/* <Progress  complete={false} /> */}
      <Text size="middle" textAlign="center">
        このアプリを始めるための最低限の情報を入力してください
      </Text>
      <SigninForm />
    </View>
  );
};

export default Signup;
