import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import FloatButton from './float-button.component';

export default storiesOf('Float-Button', module)
  .addDecorator((story) => <View style={{ margin: 10 }}>{story()}</View>)
  .add('small', () => <FloatButton size="small" />)
  .add('medium', () => <FloatButton size="medium" />)
  .add('large', () => <FloatButton size="large" />)
  .add('default', () => <FloatButton />)
  .add('blue', () => <FloatButton backgroundColor="blue" />)
  .add('disabled', () => <FloatButton disabled />);
