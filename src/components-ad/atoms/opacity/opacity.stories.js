import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { View } from 'native-base'
import Opacity from './opacity.components'

/*************************[ props ]*****************************
  participent: number 参加人数
  opacity: number 最大人数
****************************************************************/

export default storiesOf('Opacity - atoms', module)
.addDecorator((story) => <View>{story()}</View>)
.add('default', () => <Opacity participent={5} opacity={30}/>)
.add('max opacity', () => <Opacity participent={30} opacity={30} />)