import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getActiveChildNavigationOptions } from 'react-navigation';

const EventFrameScreen = () => {
    const screen = 'EventFrameScreen'
    return(
        <View>
            <Text>{screen}</Text>
            <Text>{}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default EventFrameScreen;