import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import SocialLogin from './social-login.component';

/*************************[ props ]*****************************

****************************************************************/

export default storiesOf('SocialLogin - organisms', module)
  .addDecorator((story) => <View style={{ margin: 10 }}>{story()}</View>)
  .add('default', () => <SocialLogin />);
