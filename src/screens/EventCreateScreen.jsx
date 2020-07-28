import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const EventCreateScreen = ({navigation}) => {
    return(
        <View style={styles.allWrap}>
            <View style={styles.imageWrap}>
                {/* ロレンピクサムから画像持ってきて差し込んでいる */}
                <Image
                style={styles.image}
                source={{uri: "https:picsum.photos/200/300"}}
            />
            </View>
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
                            <Text style={styles.eventContact}
                            onPress={()=>navigation.navigate('Event')}
                            >
                                イベントのお問い合わせをする</Text>
                    </View>
                </View>
            </View>
            <View style={styles.participationTextWrap}>
                <Text style={styles.participationText}>参加枠の選択</Text>
            </View>
            <View style={styles.bottomWrap}>
                
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
        marginVertical: 10,
        marginHorizontal: 40,
        borderColor: '#b8b9b9',
        backgroundColor: 'white',
        borderWidth: 2,
        height: hp('15%'),
        borderRadius: 5,
        
    },
    titleWrap: {
        borderColor: '#b8b9b9',
        borderWidth: 1,
        margin: 5,
        width: wp('35%'),
        height: hp('2.3%')
        
    },
    mainGroupText: {
        fontSize: hp('1.5%'),
        height: hp('2.3%'),
        fontWeight: '500',
        letterSpacing: 2,
        textAlign: 'center',
        marginTop: hp('0.4%')    
    },
    mainTitle: {
        fontSize: hp('1.5%'),
        letterSpacing: 3,
        marginBottom: hp('1%')
    },
    textWrap: {
        lineHeight: 5,
        marginLeft: hp('1%'),
        height: hp('14%'),
        width: '95%'
    },
    eventTime: {
        fontSize: 8,
        letterSpacing: 3,
        marginBottom: 5,
    },
    eventContact: {
        fontSize: 8,
        letterSpacing: 3
    },
    allWrap: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fff'
    },
    backImage: {
        width: '100%',
        flex: 1
    },
    participationText: {
        letterSpacing: 2.5,
        fontWeight: '500',
    },
    participationTextWrap: {
        marginLeft: 40,
        marginVertical: 20,
    },



});

export default EventCreateScreen;