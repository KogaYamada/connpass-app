import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import Button from './button.component';

/*************************[ props ]*****************************
  title: string;                                      ボタンのタイトル
  color: string;                                      ボタンの色
  onPress: (event: GestureResponderEvent) => void;    ボタンを押したときに実行される関数
****************************************************************/

export default storiesOf('Button - atoms', module)
  .addDecorator((story) => <View style={{ margin: 10 }}>{story()}</View>)
  .add('default', () => <Button title="ログイン" />);
