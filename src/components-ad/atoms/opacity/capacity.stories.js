import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'native-base';
import Capacity from './capacity.components';

/*************************[ props ]*****************************
  participent: number 参加人数
  capacity: number 最大人数
****************************************************************/

export default storiesOf('Opacity - atoms', module)
  .addDecorator((story) => <View>{story()}</View>)
  .add('default', () => <Capacity participent={5} capacity={30} />)
  .add('max opacity', () => <Capacity participent={30} capacity={30} />);
