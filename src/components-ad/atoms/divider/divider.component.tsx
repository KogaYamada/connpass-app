import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface DividerProps {
  /* 要素の高さ */
  height?: 'small' | 'middle' | 'large';
}

const dividerHeight = (height: any) => {
  switch (height) {
    case 'small':
      return styles.containerHeightSmall;
      break;
    case 'middle':
      return styles.containerHeightMiddle;
      break;
    case 'large':
      return styles.containerHeightLarge;
      break;
    default:
      return styles.containerHeightNone;
      break;
  }
};

const Divider = ({ height }: DividerProps) => {
  return (
    <View style={dividerHeight(height)}>
      <Text style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeightNone: {
    width: '100%',
    paddingHorizontal: 10,
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
  },
  containerHeightSmall: {
    width: '100%',
    height: 20,
    paddingHorizontal: 10,
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
  },
  containerHeightMiddle: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
  },
  containerHeightLarge: {
    width: '100%',
    height: 100,
    paddingHorizontal: 10,
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#707070',
  },
});

export default Divider;
