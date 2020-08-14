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

export const actions = {
  // onPress: () => alert('hello'),
};
export default storiesOf('Title', module)
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
