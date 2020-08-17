import React, { useState, FC } from 'react'
import { View, Text } from 'native-base'
import RadioButton from '../../atoms/radio-button/radio-button.components'

interface RadioGroupProps {
  defaultValue: string
}

const RadioGroup:FC<RadioGroupProps> = ({defaultValue}) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <View>
      <RadioButton value={value} setValue={setValue} label='apple' />
      <RadioButton value={value} setValue={setValue} label='lemon' />
    </View>
  )
}

export default RadioGroup