import React, { FC } from 'react';
import { View, Text } from 'native-base';
import ProgressNumber from '../atoms/progress-number.components';
import { StyleSheet } from 'react-native';

interface ProgressBarProps {
  complete: boolean
}

const ProgressBar:FC<ProgressBarProps> = ({complete}) => {
  const _barBg = complete ? 'barBg' : 'none';
  return (
    <View>
      <View style={styles.container}>
        <ProgressNumber number={1} progressText='完了' status='complete' />
        <Text style={[styles.bar, styles[_barBg]]} />
        <ProgressNumber number={2} progressText='メール送信' status='now' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  bar: {
    height: 4,
    backgroundColor: '#707070',
    width: 118,
    marginTop: 14,
    marginRight: 8,
    marginLeft: 8,
    borderRadius: 19
  },
  barBg: {
    backgroundColor: '#4DC188',
  },
  none: {},
});

export default ProgressBar;
