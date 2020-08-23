import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface DividerProps {
  /* 要素の高さ */
  height?: 'small' | 'middle' | 'large';
}

const Divider = ({ height }: DividerProps) => (
    <View
      style={[styles.container, height && styles[height]]}>
      <Text style={styles.divider} />
    </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
  },
  small: {
    height: 20,
  },
  middle: {
    height: 50,
  },
  large: {
    height: 100,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#707070',
  },
});

export default Divider;
