import React, { FC } from 'react';
import {} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

import Devider from '../../atoms/divider/divider.component';
import Title from '../../atoms/title/title.component';
import LoginForm from '../../organisms/login-form/login-form.component';
import SocialLogin from '../../organisms/social-login/social-login.component';

import FloatButton from '../../atoms/float-button/float-button.component';

type NavigateProps = {};
interface SigninScreenProps {
  navigation: NavigationStackProp<NavigateProps>;
}
const Signin: FC<SigninScreenProps> = ({ navigation }): JSX.Element => {
  console.log(navigation);
  return (
    <>
      <Title size="small" sideBarColor="red">
        ログインする
      </Title>
      <LoginForm />
      <FloatButton
        title="サインアップへ"
        backgroundColor="blue"
        onPress={() => navigation.navigate('Signup')}
      />
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

export default Signin;
