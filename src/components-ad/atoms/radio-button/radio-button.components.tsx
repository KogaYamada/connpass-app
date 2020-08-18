import React, { FC, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface IRadioChoice {
  value: string;
  label: string;
}

interface RadioButtonProps {
  radioChoices: IRadioChoice[];
  defaultValue: string;
}

const RadioButton: FC<RadioButtonProps> = ({
  radioChoices = [
    { value: 'apple', label: 'apple' },
    { value: 'banana', label: 'banana' },
  ],
  defaultValue,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  return (
    <View>
      {radioChoices.map((choice) => {
        return (
          <View key={choice.value} style={styles.container}>
            <TouchableOpacity
              style={styles.radioCircle}
              onPress={() => {
                setSelectedValue(choice.value);
              }}>
              {selectedValue === choice.value && (
                <View style={styles.selectedRb} />
              )}
            </TouchableOpacity>
            <Text style={styles.radioText}>{choice.label}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  radioText: {
    marginLeft: 14,
    fontSize: 16,
    color: '#000',
  },
  radioCircle: {
    height: 19,
    width: 19,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#707070',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 11,
    height: 11,
    borderRadius: 50,
    backgroundColor: '#888CEB',
  },
});

export default RadioButton;
