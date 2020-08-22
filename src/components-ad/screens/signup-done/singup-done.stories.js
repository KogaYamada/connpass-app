import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { View } from 'native-base'
import SingupDone from './signup-done.component'

/*************************[ props ]*****************************

****************************************************************/

export default storiesOf('Signup-done - screens', module)
  .addDecorator((story) => <View>{story()}</View>)
  .add('singup-done screen', () => <SingupDone />);