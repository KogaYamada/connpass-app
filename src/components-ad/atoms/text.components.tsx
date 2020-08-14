import React, { FC } from 'react';
import { View, Text } from 'native-base';
import { StyleSheet } from 'react-native';

interface TextComponentProps {
  size: 'large' | 'middle' | 'small';
  textAlign: 'left' | 'center' | 'right';
  styleProps: any //型わからなかった。
}

const TextComponent: FC<TextComponentProps> = ({
  size = 'middle',
  textAlign = 'left',
  styleProps,
  children = 'hello',
}) => {
  return (
    <View>
      <Text style={[styles[size], styles[textAlign], styleProps]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  small: {
    fontSize: 12,
  },
  middle: {
    fontSize: 16,
  },
  large: {
    fontSize: 40,
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
});

export default TextComponent;
