import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import Login from './signin.component';

/*************************[ props ]*****************************

****************************************************************/

export default storiesOf('Login - templates', module)
  .addDecorator((story) => <View style={{}}>{story()}</View>)
  .add('login screen', () => <Login />);
