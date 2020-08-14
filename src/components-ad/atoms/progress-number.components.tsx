import React, { FC } from 'react';
import { View, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ProgressNumberProps {
  progressNumber: number;
  progressText: string;
  complete: boolean;
  status: 'normal' | 'now' | 'complete';
}

const ProgressNumber: FC<ProgressNumberProps> = ({
  progressNumber,
  progressText,
  status = 'normal',
}) => {
  const _BgColor = status === 'complete' ? 'BgColor' : 'none';
  const _BorderBolor = status === 'normal' ? 'BorderBolor' : 'none';
  const _textColor = status === 'complete' ? 'textColor' : 'none';
  return (
    <View style={styles.container}>
      <View style={[styles.circle, styles[_BgColor], styles[_BorderBolor]]}>
        {status === 'complete' ? (
          <Text style={[styles.progressNumberStyle, styles[_textColor]]}>
            <Icon name="check" size={17} />
          </Text>
        ) : (
          <Text style={[styles.progressNumberStyle, styles[_textColor]]}>
            {progressNumber}
          </Text>
        )}
      </View>
      <Text style={styles.progressTextStyle}>{progressText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  circle: {
    position: 'relative',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 15,
    borderColor: '#4DC188',
    borderWidth: 2,
    width: 28,
    height: 28,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  progressNumberStyle: {
    fontSize: 12,
    marginTop: 'auto',
    marginBottom: 'auto',
    color: '#707070',
  },
  progressTextStyle: {
    fontSize: 10,
    color: '#707070',
    marginTop: 10,
    textAlign: 'center',
    position: 'absolute',
    top: 22,
    right: -36,
    width: 100,
  },
  BgColor: {
    backgroundColor: '#4DC188',
  },
  textColor: {
    color: '#fff',
  },
  BorderBolor: {
    borderColor: '#707070',
    borderWidth: 1,
  },
  none: {},
});

export default ProgressNumber;
