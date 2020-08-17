import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import SignupForm from './signup-form.component';

/*************************[ props ]*****************************

****************************************************************/

export const actions = {
  // onPress: () => alert('hello'),
};
export default storiesOf('SignupForm - organisms', module)
  .addDecorator((story) => <View style={{ margin: 10 }}>{story()}</View>)
  .add('signup form', () => <SignupForm />);
