import React,{useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CheckBox } from 'react-native-elements'

const EventCreateScreen = ({navigation}) => {
   



    return(
        <View style={styles.allWrap}>
            <View style={styles.cssWrap}>
            <View style={styles.imageWrap}>
                <Image
                style={styles.image}
                source={{uri: "https:picsum.photos/200/300"}}
            />
            </View>
            <View style={styles.wrap}>
                <View style={styles.groupWrap}>
                    <View style={styles.textWrap}>
                        <View style={styles.titleWrap}>
                            <Text style={styles.mainGroupText}>主催グループ</Text>
                        </View>
                        <View>
                            <Text style={styles.mainTitle}>みんなでReactを学ぼう！</Text>
                        </View>
                        <View>
                            <Text style={styles.eventTime}>2020/07/02 (金) 21:00~22:00</Text>
                        </View>
                        <View>
                            <TouchableOpacity
                            onPress={()=>navigation.navigate('主催者へのお問い合わせ')}
                            >
                                <Text style={styles.eventContact}>
                                イベントのお問い合わせをする</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.participationTextWrap}>
                <Text style={styles.participationText}>参加枠の選択</Text>
            </View>
            <View style={styles.bottomWrap}>
            <CheckBox
                left
                title='参加枠(各割引については下記参照)'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={false}
                
            />
            </View>
            </View>
        </View>
    
    );
};

const styles = StyleSheet.create({
    imageWrap: {
        alignItems: 'center',
        marginTop: 10,
        
    },
    image: {
        width: wp('80%'),
        height: hp('20%'), 
        borderRadius: 10,
        borderColor: '#d1cfd6',
        borderWidth: 2,
    },
    groupWrap: {
        borderColor: '#b8b9b9',
        backgroundColor: 'white',
        marginVertical: 20,
        borderWidth: 2,
        height: hp('20%'),
        width: wp('80%'),
        borderRadius: 5,
        
        
        
    },
    titleWrap: {
        borderColor: '#b8b9b9',
        borderWidth: 1,
        margin: 5,
        marginBottom: 10,
        width: wp('34%'),
        height: hp('3%'),
        
        
    },
    mainGroupText: {
        fontSize: hp('1.5%'),
        fontWeight: '500',
        letterSpacing: 2,
        textAlign: 'center',
        marginTop: 5,
        
        
    },
    mainTitle: {
        fontSize: hp('1.7%'),
        letterSpacing: 3,
        marginBottom: 14
    },
    textWrap: {
        marginLeft: 10,
        lineHeight: 5,
        height: hp('14.7%'),
        width: wp('75%')
    },
    eventTime: {
        fontSize: hp('1.3%'),
        letterSpacing: 3,
        marginBottom: 10,
    },
    eventContact: {
        marginBottom: 7,
        fontSize: hp('1.3%'),
        width: wp('47.5%'),
        letterSpacing: 3,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    allWrap: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: 'white'
    },
    participationText: {
        letterSpacing: 2.5,
        fontWeight: '500',
    },
    participationTextWrap: {
        marginLeft: 40,
        marginVertical: 20,
    },
    wrap: {
        alignItems: 'center'
    },
    cssWrap: {
        
    }



});

export default EventCreateScreen;