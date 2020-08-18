import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import Signup from './signup.component';

/*************************[ props ]*****************************

****************************************************************/

export default storiesOf('Signup - screens', module)
  .addDecorator((story) => <View style={{}}>{story()}</View>)
  .add('signup screen', () => <Signup />);
