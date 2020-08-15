import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import Title from './title.component';
export const task = {
  bold: true,
  sideBarColor: 'red',
  size: 'middle',
  onPress: () => console.log('hello'),
};

/*************************[ props ]*****************************
  bold?: boolean;                                     trueの時、タイトル文字に`bold`を追加
  sideBarColor?: SideBarColorProps;                   タイトル横のバーの色、指定無しで非表示。red,の中から選択。
  size?: 'small' | 'middle' | 'large';                文字のサイズ。small, middle, largeから選択。デフォルトはmiddle
  onPress?: (event: GestureResponderEvent) => void;   タイトルを押した時の関数
****************************************************************/

export const actions = {
  // onPress: () => alert('hello'),
};
export default storiesOf('Title - atoms', module)
  .addDecorator((story) => <View style={{ margin: 10 }}>{story()}</View>)
  .add('default', () => <Title {...actions}>タイトル</Title>)
  .add('small', () => (
    <Title size="small" {...actions}>
      タイトル
    </Title>
  ))
  .add('middle', () => (
    <Title size="middle" {...actions}>
      タイトル
    </Title>
  ))
  .add('large', () => (
    <Title size="large" {...actions}>
      タイトル
    </Title>
  ))
  .add('red', () => (
    <Title sideBarColor="red" {...actions}>
      タイトル
    </Title>
  ));
