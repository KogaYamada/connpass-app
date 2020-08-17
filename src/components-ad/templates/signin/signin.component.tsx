import React, { FC } from 'react';
import {} from 'react-native';

import Devider from '../../atoms/divider/divider.component';
import LoginForm from '../../organisms/login-form/login-form.component';
import SocialLogin from '../../organisms/social-login/social-login.component';

import FloatButton from '../../atoms/float-button/float-button.component';

interface LoginProps {
  navigation: any;
}

const Login: FC<LoginProps> = ({ navigation }): JSX.Element => {
  return (
    <>
      <LoginForm />
      <Devider height="small" />
      <SocialLogin />

      {/* ホームに移動 */}
      {navigation && (
        <FloatButton
          title="TEST NAVIGATE TO HOME"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      )}
    </>
  );
};

export default Login;
