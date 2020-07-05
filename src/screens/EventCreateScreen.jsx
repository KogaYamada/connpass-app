import React,{useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text,Button } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CheckBox } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';

const EventCreateScreen = ({navigation}) => {
    const [state, setState] =useState(false);
    const [state_2, setState_2] = useState(false);
    const [state_3, setState_3] = useState(false);

    


    return(
        <View style={styles.mainWrap}>
            <SafeAreaView>
            <ScrollView style={styles.allWrap}>
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
            <View style={styles.CheckBoxWrap}>
            <View style={styles.bottomWrap}>
                <View style={styles.boxOne}>
                    <CheckBox
                        style={styles.checkBox}
                        left
                        title='参加枠(各割引については下記参照)'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={state}
                        onPress={() => setState(!state)}
                    />
                    <Text style={styles.text_one}>会場払い: 1000円 </Text>
                    <View style={styles.flexWrap}>
                        <Text style={styles.text_two}>先着順</Text>
                        <Text style={styles.text_tree}>3/6人</Text>
                    </View>
                </View>
                <View style={styles.boxTwo}>
                <CheckBox
                    style={styles.checkBox}
                    left
                    title='メンター枠(各割引については下記参照)'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={state_2}
                    onPress={() => setState_2(!state)}
                />
                    <Text style={styles.text_one}>会場払い: 1000円 </Text>
                    <View style={styles.flexWrap}>
                        <Text style={styles.text_two}>先着順</Text>
                        <Text style={styles.text_tree}>3/6人</Text>
                    </View>
                </View>
                <View style={styles.boxTree}>
                <CheckBox
                    style={styles.checkBox}
                    left
                    title='メイド枠(各割引については下記参照)'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={state_3}
                    onPress={() => setState_3(!state)}
                />
                    <Text style={styles.text_one}>会場払い: 1000円 </Text>
                    <View style={styles.flexWrap}>
                        <Text style={styles.text_two}>先着順</Text>
                        <Text style={styles.text_tree}>3/6人</Text>
                    </View>
                </View>

            </View>
            </View>
            </View>
            
            
            </ScrollView>
            </SafeAreaView>
            <View style={styles.buttonWrap}>
            <Button 
                    style={styles.registerButton} 
                    full={false} rounded danger
                    onPress={() => navigation.navigate('Notification')}
                    >
            <Text style={styles.buttonText}> イベントを作成する</Text>
            </Button>
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
        height: hp('17%'),
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
        height: hp('80%'),
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
        
    },
    checkBox: {
        backgroundColor: 'white'
    },
    bottomWrap: {
        borderColor: '#b8b9b9',
        borderWidth: 2,
        width: wp('80%'),
        borderRadius: 5
        
    },
    CheckBoxWrap: {
        width: wp('100%'),
        height: hp('45%'),
        alignItems: 'center'
        
    },
    text_one: {
        fontSize: hp('1.3%'),
        color: 'gray',
        marginBottom: 10,
        marginHorizontal: 10
    },
    text_two: {
        fontSize: hp('1.3%'),
        color: 'gray',
    },
    flexWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginHorizontal: 10,
        marginBottom: 10
    },
    registerButton:{
        width: '70%',
        height:100,
        marginBottom: 50,
        flex: 1,
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#b6192e'
        
        
    },
    buttonWrap: {
        width: '100%',
        alignItems: 'center',
        height: 100,
        
        
    },
    buttonText: {
        width:'100%',
        textAlign: 'center'
    },
    mainWrap: {
        width: wp('100%'),
        height: hp('3%')
    }


});

export default EventCreateScreen;