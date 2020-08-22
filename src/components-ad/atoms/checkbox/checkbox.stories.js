import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'native-base';
import Checkbox from './checkbox.component';

/*************************[ props ]*****************************
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;      
****************************************************************/

export default storiesOf('Checkbox - atoms', module)
  .addDecorator((story) => <View style={{ margin: 10 }}>{story()}</View>)
  .add('checked', () => <Checkbox checked={true} />)
  .add('unchecked', () => <Checkbox checked={false} />);
