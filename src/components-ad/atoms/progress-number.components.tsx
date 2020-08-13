import React, { FC } from 'react';
import { View, Text } from 'native-base';
import { StyleSheet } from 'react-native';

interface ProgressNumberProps {
  progressNumber: string;
  progressText: string;
  complete: boolean;
}

const ProgressNumber: FC<ProgressNumberProps> = ({
  progressNumber,
  complete,
  progressText,
}) => {
  const _BgColor = complete ? 'BgColor' : 'none';
  const _textColor = complete ? 'textColor' : 'none';
  return (
    <View>
      <View style={[styles.circle, styles[_BgColor]]}>
        <Text style={[styles.progressNumberStyle, styles[_textColor]]}>{progressNumber}</Text>
      </View>
      <Text style={styles.progressTextStyle}>{progressText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 15,
    width: 28,
    height: 28,
    borderColor: '#4DC188',
    borderWidth: 2,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  progressNumberStyle: {
    fontSize: 12,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  progressTextStyle: {
    fontSize: 10,
    color: '#707070',
    marginTop: 10,
    textAlign: 'center',
  },
  BgColor: {
    backgroundColor: '#4DC188',
  },
  textColor: {
    color: '#fff',
  },
  none: {},
});

export default ProgressNumber;
