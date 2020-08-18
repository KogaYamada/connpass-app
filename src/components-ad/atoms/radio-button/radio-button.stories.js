import React from 'react';
import { storiesOf } from '@storybook/react-native';
import RadioButton from './radio-button.components';
import { View } from 'native-base';

/*************************[ props ]*****************************
  value: string;                                       選択されたボタンのvalue
  setValue: (value: string) => void                    ラジオボタンを押した時に実行される関数
  label: string:                                       ラジオボタンのテキスト       
****************************************************************/

export default storiesOf('RadioButton - atoms', module)
  .addDecorator((story) => <View style={{ margin: 10 }}>{story()}</View>)
  .add('checked', () => <RadioButton defaultValue='apple' />)
  .add('unchecked', () => <RadioButton defaultValue='grape'/>)
