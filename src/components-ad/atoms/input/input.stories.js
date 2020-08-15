import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import Input from './input.component';

/*************************[ props ]*****************************
  value?: string;                            inputに入力された値
  placeholder?: string;                      入力していないときに表示されるプレイスホルダー
  error?: boolean;                           trueでエラー表示
  secureTextEntry?: boolean;                 trueで入力したテキストがドットになる
  onChangeText?: (text: string) => void;     inputが入力されるたびに実行される関数 
****************************************************************/

export default storiesOf('Input - atoms', module)
  .addDecorator((story) => <View style={{ margin: 10 }}>{story()}</View>)
  .add('default', () => <Input placeholder="メールアドレス" />)
  .add('secure', () => <Input placeholder="パスワード" secureTextEntry />)
  .add('error', () => (
    <Input
      placeholder="パスワード"
      secureTextEntry
      errMesage="パスワードが違います"
    />
  ));
