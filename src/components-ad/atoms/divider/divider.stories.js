import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import Divider from './divider.component';

export default storiesOf('Divider', module)
  .addDecorator((story) => <View style={{ margin: 10 }}>{story()}</View>)
  .add('height small', () => <Divider height="small" />)
  .add('height middle', () => <Divider height="middle" />)
  .add('height large', () => <Divider height="large" />);
