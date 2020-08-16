import React, { FC } from 'react';
import {} from 'react-native';

import Devider from '../../atoms/divider/divider.component';
import LoginForm from '../../organisms/login-form/login-form.component';
import SocialLogin from '../../organisms/social-login/social-login.component';

interface LoginProps {}

const Login: FC<LoginProps> = (): JSX.Element => {
  return (
    <>
      <LoginForm />
      <Devider height="small" />
      <SocialLogin />
    </>
  );
};

export default Login;
