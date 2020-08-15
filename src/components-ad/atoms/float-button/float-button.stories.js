import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import FloatButton from './float-button.component';

/*************************[ props ]*****************************
  title: string;                                       ボタンのタイトル
  backgroundColor?: 'green' | 'blue';                  ボタンの背景色
  size?: 'small' | 'medium' | 'large';                 ボタンのサイズ
  disabled?: boolean;                                  trueでボタン使用不可
  onPress?: (event: GestureResponderEvent) => void;    ボタンを押した時に実行される関数
****************************************************************/

export default storiesOf('FloatButton - atoms', module)
  .addDecorator((story) => <View style={{ margin: 10 }}>{story()}</View>)
  .add('small', () => <FloatButton size="small" />)
  .add('medium', () => <FloatButton size="medium" />)
  .add('large', () => <FloatButton size="large" />)
  .add('blue', () => <FloatButton backgroundColor="blue" />)
  .add('disabled', () => <FloatButton disabled />);
