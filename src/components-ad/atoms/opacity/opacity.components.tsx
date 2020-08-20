import React, { FC } from 'react';
import { View, Text } from 'native-base';
import { StyleSheet } from 'react-native';

interface OpacityProps {
  participent: number
  opacity: number
}

const Opacity:FC<OpacityProps> = ({participent, opacity}) => {
  const _maxOpacity = participent === opacity ? 'maxOpacity' : 'none';
  return (
    <View>
      <Text style={[styles.opacity, styles[_maxOpacity]]}>{participent}/{opacity} 人</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  opacity: {
    fontSize: 14,
    color: '#707070',
  },
  maxOpacity: {
    color: '#E06969',
  },
  none: {}
})

export default Opacity