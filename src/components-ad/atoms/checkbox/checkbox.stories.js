import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'native-base';

/*************************[ props ]*****************************
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;      
****************************************************************/

export default storiesOf('Checkbox - atoms', module)
  .addDecorator((story) => <View style={{ margin: 10 }}>{story()}</View>)
  .add('checked', () => <Checkbox />)
  .add('unchecked', () => <Checkbox />);
