import React, { FC } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface RadioButtonProps {
  value: string;
  setValue: (value: string) => void
  label: string;
}

const RadioButton: FC<RadioButtonProps> = ({value, setValue, label}: any) => {
  console.log(value);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.radioCircle}
        onPress={() => {
          setValue(label);
        }}>
        {value === label && <View style={styles.selectedRb} />}
      </TouchableOpacity>
      <Text style={styles.radioText}>{label}</Text>
    </View>
  );
}

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