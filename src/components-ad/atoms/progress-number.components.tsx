import React, { FC } from 'react';
import { View, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ProgressNumberProps {
  number: number;
  progressText: string;
  status: 'normal' | 'now' | 'complete';
}

const ProgressNumber: FC<ProgressNumberProps> = ({
  number,
  progressText,
  status = 'normal',
}) => {
  const _BgColor = status === 'normal' ? 'none' : 'BgColor';
  const _textColor = status === 'normal' ? 'none' : 'textColor';
  return (
    <View style={styles.container}>
      <View style={[styles.circle, styles[_BgColor]]}>
        {status === 'complete' ? (
          <Text style={[styles.progressNumberStyle, styles[_textColor]]}>
            <Icon name="check" size={17} />
          </Text>
        ) : (
          <Text style={[styles.progressNumberStyle, styles[_textColor]]}>
            {number}
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
  none: {},
});

export default ProgressNumber;
