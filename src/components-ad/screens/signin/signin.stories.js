import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import Signin from './signin.component';

/*************************[ props ]*****************************

****************************************************************/

export default storiesOf('Signin - screens', module)
  .addDecorator((story) => <View style={{}}>{story()}</View>)
  .add('signin screen', () => <Signin />);
