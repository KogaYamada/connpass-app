import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

export default FloatButton = ({ value, size }) => {
    return <Button style={styles.spacer} disabled="false">{value}</Button>;
};

const styles = StyleSheet.create({
    spacer: {
        margin: 20,
    },
});