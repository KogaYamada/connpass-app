import React from 'react';
import {View, StyleSheet, Text, Image,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


// イベントのコンポーネント
const EventComponent = () => {
    return(
        <TouchableOpacity>
        <View style={styles.frame}>
                <View style={styles.innerFrame}>
                    <View style={styles.image}>
                    <Image
                    style={{width: '100%', height: '100%', borderRadius: 5}}
                    source={{uri: "https:picsum.photos/200/300"}}
                    />
                </View>

            <View style={styles.textWrap}>
                <View style={styles.wrapContainer}>
                    <Text style={styles.leftContainer}>{'３月\n9日'}</Text>
                </View>
                    <View style={styles.rightContainer}>
                    <View style={styles.textTopWrap}>
                        <Text style={styles.rightText}>12:00 ~ 13:00</Text>
                        <Text>あと2日</Text>
                    </View>
                    <View style={styles.rightWrapText}>
                        <Text allowFontScaling={false} style={styles.group}>グループ名</Text>
                        <Text allowFontScaling={false} style={styles.subText}>タイトルタイトルタイトルタイトル</Text>
                        <Text allowFontScaling={false} style={styles.organizer}>開催者名</Text>
                    </View>
                    </View>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    
    );
};

const styles = StyleSheet.create({
    
    frame: {
        height: hp('34%'),
        width: wp('85%'),
        borderRadius: 10,
        
    },
    innerFrame: {
        borderColor: '#d1cfd6',
        borderWidth: 2,
        height: hp('30%'),
        width: wp('72.5%'),
        borderRadius: 5,
        
    },
    image: {
        height: hp('18%'),
        width: wp('72%'),
        borderBottomColor: '#d1cfd6',
        borderBottomWidth: 2,
        
    },
    month: {
        backgroundColor: '#d1cfd6'
    },
    wrapContainer: {
        flexDirection: 'row',
        borderRightColor: '#d1cfd6',
        borderRightWidth: 2,
        height: hp('12%'),
        width: wp('18%'),
        padding: 5
    },
    leftContainer: {
        fontSize: hp('3%'),
        textAlign: 'center', 
    },
    textWrap: {
        flexDirection: 'row',
    },
    rightText: {
        fontSize: hp('1.7%'),
        marginLeft: 15,
        width: wp('25%')
    },
    group: {
        fontSize: hp('1.5%'),
        marginLeft: 10,
        textAlign: 'left'
    },
    subText: {
        fontSize: hp('1.5%'),
        marginLeft: 10,
        
    },
    organizer: {
        fontSize: hp('1.5%'),
        marginLeft: 10,
        textAlign: 'left'
    },
    organizerName: {
        fontSize: hp('1.5%'),
        marginLeft: 10,
        
    },
    textTopWrap: {
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 5
    },
    rightWrapText: {
        width: ('100%'),
        
    },

export default EventComponent;
