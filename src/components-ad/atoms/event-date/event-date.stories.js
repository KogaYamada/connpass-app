import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'native-base';
import EventDate from './event-date.component';

/*************************[ props ]*****************************
  
****************************************************************/

export default storiesOf('EventDate - atoms', module)
  .addDecorator((story) => <View style={{ margin: 10 }}>{story()}</View>)
  .add('default', () => <EventDate month={7} day={12} week="火" />);
