import React, { FC } from 'react';
import { View, Text } from 'native-base';
import ProgressNumber from '../atoms/progress-number.components';
import { StyleSheet } from 'react-native';
import style from '../../../storybook/stories/CenterView/style';

interface ProgressBarProps {
  progressText: string;
  status: 'normal' | 'now' | 'complete';
  progressText2: string;
  status2: 'normal' | 'now' | 'complete';
  complete: boolean;
}

const ProgressBar: FC<ProgressBarProps> = ({
  progressText,
  status,
  progressText2,
  status2,
  complete,
}) => {
  const _barBg = complete ? 'barBg' : 'none';
  return (
    <View style={styles.container}>
      <ProgressNumber
        number={1}
        progressText={progressText}
        status={status}
      />
      <View style={[styles.bar, styles[_barBg]]} />
      <ProgressNumber
        number={2}
        progressText={progressText2}
        status={status2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  bar: {
    height: 4,
    backgroundColor: '#707070',
    width: 118,
    marginTop: 0,
    marginRight: 8,
    marginLeft: 8,
    borderRadius: 19,
  },
  barBg: {
    backgroundColor: '#4DC188',
  },
  none: {},
});

export default ProgressBar;
