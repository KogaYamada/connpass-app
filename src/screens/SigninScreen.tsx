import React, { FC } from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import Signin from '../components-ad/templates/signin/signin.component';

type NavigateProps = {};
interface SigninScreenProps {
  navigation: NavigationStackProp<NavigateProps>;
}

const SigninScreen: FC<SigninScreenProps> = ({ navigation }) => {
  return (
    <>
      {/* ロゴを配置予定 */}
      <Signin navigation={{ navigation }} />
    </>
  );
};

export default SigninScreen;
