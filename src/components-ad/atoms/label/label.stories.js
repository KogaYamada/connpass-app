import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'native-base';
import Label from './label.components';

/*************************[ props ]*****************************
  bgColor: 'gray' | 'orange' | 'yellow';  背景の色
  title: string;　ボタンのテキスト
****************************************************************/

export default storiesOf('Label - atoms', module)
  .addDecorator((story) => <View style={{ margin: 10 }}>{story()}</View>)
  .add('gray', () => <Label bgColor="gray" />)
  .add('yellow', () => <Label bgColor="yellow" />)
  .add('orange', () => <Label bgColor="orange" />);