import React from 'react';
import { View, Text } from 'native-base';
import ProgressNumber from '../atoms/progress-number.components';
import { StyleSheet } from 'react-native';

const ProgressBar = () => {
  return (
    <View>
      <View style={styles.container}>
        <ProgressNumber progressNumber="1" progressText='完了' complete={true} />
        <Text style={styles.bar} />
        <ProgressNumber progressNumber="2" progressText='メール送信' complete={false} />
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
});

export default ProgressBar;
