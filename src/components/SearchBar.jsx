import React,{useState} from 'react';
import  {View, StyleSheet, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    
    return(
        <View style={styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder='検索'
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#e6e6e7',
        height: hp('4.5%'),
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10,
    },
    inputStyle: {
        flex: 1,
        fontSize: hp('2%')
    },
    iconStyle: {
        fontSize: hp('3%'),
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar;