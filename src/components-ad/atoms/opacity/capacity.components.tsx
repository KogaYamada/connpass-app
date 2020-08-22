import React, { FC } from 'react';
import { View, Text } from 'native-base';
import { StyleSheet } from 'react-native';

interface CapacityProps {
  participent: number;
  capacity: number;
}

const Capacity: FC<CapacityProps> = ({ participent, capacity }) => {
  const _maxCapacity = participent === capacity ? 'maxCapacity' : 'none';
  return (
    <View>
      <Text style={[styles.capacity, styles[_maxCapacity]]}>
        {participent}/{capacity} 人
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  capacity: {
    fontSize: 14,
    color: '#707070',
  },
  maxCapacity: {
    color: '#E06969',
  },
  none: {},
});

export default Capacity;
