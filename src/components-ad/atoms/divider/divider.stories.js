import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import Divider from './divider.component';

/*************************[ props ]*****************************
  height?: 'small' | 'middle' | 'large';       要素の高さ
****************************************************************/

export default storiesOf('Divider - atoms', module)
  .addDecorator((story) => <View style={{ margin: 10 }}>{story()}</View>)
  .add('height small', () => <Divider height="small" />)
  .add('height middle', () => <Divider height="middle" />)
  .add('height large', () => <Divider height="large" />);
