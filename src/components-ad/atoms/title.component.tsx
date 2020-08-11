import React, { FC } from 'react';
import { StyleSheet, Text, GestureResponderEvent } from 'react-native';
import { View } from 'native-base';

type SideBarColor = '#A82402' | '#000';
type SideBarColorProps = 'red' | undefined;
interface TitleProps {
  bold?: boolean;
  sideBarColor?: SideBarColorProps;
  size?: 'small' | 'middle' | 'large';
  onPress?: (event: GestureResponderEvent) => void;
}

const Title: FC<TitleProps> = ({
  bold,
  sideBarColor,
  size = 'middle',
  onPress,
  children,
}) => {
  const _bold = bold ? 'bold' : 'none';
  const _sideBarColor = ((color: SideBarColorProps): SideBarColor => {
    switch (color) {
      case 'red':
        return '#A82402';
      default:
        return '#000';
    }
  })(sideBarColor);
  return (
    <View
      style={
        sideBarColor
          ? { borderLeftWidth: 4, borderLeftColor: _sideBarColor }
          : null
      }>
      <Text style={{ ...styles[size], ...styles[_bold] }} onPress={onPress}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // size
  small: {
    fontSize: 24,
  },
  middle: {
    fontSize: 36,
  },
  large: {
    fontSize: 48,
  },
  // bold
  bold: {
    fontWeight: 'bold',
  },
  none: {},
});

export default Title;
