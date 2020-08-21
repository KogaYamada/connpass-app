import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

/* 要素の高さ */
type Height = 'small' | 'middle' | 'large';

interface DividerProps {
  height?: Height;
}

const Divider = ({ height }: DividerProps) => {
  const dividerHeight = (height: Height) => {
    switch (height) {
      case 'small':
        return styles.containerHeightSmall;
      case 'middle':
        return styles.containerHeightMiddle;
      case 'large':
        return styles.containerHeightLarge;
      default:
        return null;
    }
  };

  return (
    <View
      style={[styles.containerHeightDefault, height && dividerHeight(height)]}>
      <Text style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeightDefault: {
    width: '100%',
    paddingHorizontal: 10,
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
  },
  containerHeightSmall: {
    height: 20,
  },
  containerHeightMiddle: {
    height: 50,
  },
  containerHeightLarge: {
    height: 100,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#707070',
  },
});

export default Divider;
