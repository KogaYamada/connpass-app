import React, { FC } from 'react';
import { View, Text } from 'native-base';
import { StyleSheet } from 'react-native';

interface EventDateProps {
  month: number;
  day: number;
  week: string;
}

const EventDate: FC<EventDateProps> = ({
  month = 7,
  day = 12,
  week = '火',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.month}>{month}月</Text>
      <Text style={styles.day}>{day}日</Text>
      <Text style={styles.week}>{week}</Text>
    </View>
  );
};

const styles= StyleSheet.create({
  container: {
    borderRightWidth: 1,
    borderColor: '#707070',
    padding: '0 9px 0 11px',
    width: 75,
    height: 60,
  },
  month: {
    color: '#707070',
    textAlign: 'center',
  },
  day: {
    fontSize: 24,
    textAlign: 'center',
  },
  week: {
    textAlign: 'center',
  }
})

export default EventDate;
