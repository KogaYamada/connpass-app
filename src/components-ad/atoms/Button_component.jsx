import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';


export default Button_component = ({title,color,titlecolor,onPress}) => {
    const styles = StyleSheet.create({
        Button: {
            backgroundColor: color,
            borderColor: "#707070",
            borderWidth: 1,
            borderRadius: 5,
            margin: 10,
        },
        ButtonTitle: {
            color: titlecolor,
        }
    })
    return (
        <View>
            <Button
                buttonStyle={styles.Button}
            titleStyle={styles.ButtonTitle}
                title={title}
                onPress={onPress}
            />
        </View>
    )
}

