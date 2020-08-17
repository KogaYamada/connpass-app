import React, { FC } from 'react';
import { View, Text } from 'native-base';
import { StyleSheet } from 'react-native';

interface LabelProps {
  bgColor: 'gray' | 'orange' | 'yellow';
  title: string;
}

const Label: FC<LabelProps> = ({ bgColor='gray', title='ボタン' }) => {
  return (
    <View style={[styles.container, styles[bgColor]]}>
      <Text style={styles.labelText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 44,
    height: 13,
  },
  labelText: {
    fontSize: 8,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 13
  },
  gray: {
    backgroundColor: '#AAAAAA',
  },
  orange: {
    backgroundColor: '#FF6602',
  },
  yellow: {
    backgroundColor: '#F0B45E',
  },
});

export default Label;
