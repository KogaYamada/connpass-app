import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import AuthInput from './auth-input.component';

export default storiesOf('Auth-Input', module)
  .addDecorator((story) => <View style={{ margin: 10 }}>{story()}</View>)
  .add('default', () => <AuthInput placeholder="メールアドレス" />)
  .add('secure', () => <AuthInput placeholder="パスワード" secureTextEntry />)
  .add('error', () => (
    <AuthInput
      placeholder="パスワード"
      secureTextEntry
      errMesage="パスワードが違います"
    />
  ));
