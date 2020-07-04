import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




const EventContactTheOrganizer = ({navigation}) => {
    
    return(
        <View>
            <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder='メッセージを入力しましょう'
            value={[]}
            maxLength={800}
            multiline={true}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        marginTop: 15,
        fontSize: hp('2.2%'),
        textAlignVertical: 'top',

    }
});


export default EventContactTheOrganizer;