import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import FormInput from './form-input.component';

/*************************[ props ]*****************************
  value?: string;                          inputに入力された値
  placeholder?: string;                    入力していないときに表示されるプレイスホルダー
  errorMessage?: string;                   エラー時に表示するメッセージ
  secureTextEntry?: boolean;               trueで入力したテキストがドットになる
  onChangeText?: (text: string) => void;   nputが入力されるたびに実行される関数
****************************************************************/

export default storiesOf('FormInput - molecules', module)
  .addDecorator((story) => <View style={{ margin: 10 }}>{story()}</View>)
  .add('default', () => <FormInput placeholder="メールアドレス" />)
  .add('error', () => (
    <FormInput
      placeholder="パスワード"
      secureTextEntry
      error
      errorMessage="入力してください"
    />
  ));
