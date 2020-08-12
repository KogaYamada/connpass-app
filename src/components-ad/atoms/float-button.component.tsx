import React, { FC } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface FloatButtonProps {
    title: string;
    backgroundColor?: "green" | "blue";
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onPress?: () => void;
}

const FloatButton: FC<FloatButtonProps> = ({
    title = "button",
    size = 'medium',
    backgroundColor = 'green',
    disabled = false,
    onPress
}) => {
    return (
        <TouchableOpacity
            style={[styles.container, { ...styles[backgroundColor] }, disabled ? { backgroundColor: "#A0A0A0" } : null]}
            disabled={disabled}
            onPress={onPress}
        >
            <Text style={[styles.title, { ...styles[size] }]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    // size
    small: {
        fontSize: 18,
    },
    medium: {
        fontSize: 24,
    },
    large: {
        fontSize: 36,
    },
    // backgroundColor
    green: {
        backgroundColor: '#44B97D',
    },
    blue: {
        backgroundColor: '#2196F3',
    },
    container: {
        width: "80%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#2196F3",
        paddingVertical: 7,
        borderRadius: 5,

        shadowColor: "#ccc",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 0,
        shadowOpacity: 1,
        elevation: 2,
    },
    title: {
        color: "#fff",
    }
});

export default FloatButton;