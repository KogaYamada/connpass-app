import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import LoginForm from './login-form.component';

/*************************[ props ]*****************************

****************************************************************/

export const actions = {
  // onPress: () => alert('hello'),
};
export default storiesOf('LoginForm - organisms', module)
  .addDecorator((story) => <View style={{ margin: 10 }}>{story()}</View>)
  .add('login form', () => <LoginForm />);
