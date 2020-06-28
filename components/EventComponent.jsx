import React from 'react';
import {View, StyleSheet, Text,FlatList, Image } from 'react-native';

const EventComponent = () => {
    return(
        <View style={styles.frame}>
            <Text style={styles.mainText}>参加イベント</Text>
            <View style={styles.border}></View>
                <View style={styles.innerFrame}>
                    <View style={styles.image}>
                    <Image
                    style={{width: 298, height: 150}}
                    source={{uri: "https:picsum.photos/200/300"}}
                    />
                    </View>

            <View style={styles.textWrap}>
                <View style={styles.wrapContainer}>
                    <Text style={styles.leftContainer}>{'３月\n9日'}</Text>
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.textTopWrap}>
                        <Text style={styles.rightText}>12:00 ~</Text>
                        <Text>あと2日</Text>
                    </View>
                        <Text style={styles.group}>グループ名</Text>
                        <Text style={styles.subText}>タイトルタイトルタイトルタイトル</Text>
                        <Text style={styles.organizer}>開催者名</Text>
                        <Text style={styles.organizerName}>開催場所</Text>
                    </View>
                </View>
            </View>
        </View>
    
    );
};

const styles = StyleSheet.create({
    mainText: {
        fontSize: 17,
        fontWeight: 'bold',
        padding: 5,
        
    },
    frame: {
        height:300,
        width:250,
        borderRadius: 10,
        marginTop: 40
    },
    border: {
        borderBottomColor: '#d1cfd6',
        borderBottomWidth: 2,
        marginBottom: 10,
        
    },
    innerFrame: {
        borderColor: '#d1cfd6',
        borderWidth: 2,
        height: 250,
        width: 300,
        borderRadius: 10
    },
    image: {
        height: 150,
        width: 298,
        borderBottomColor: '#d1cfd6',
        borderBottomWidth: 2
    },
    month: {
        backgroundColor: '#d1cfd6'
    },
    wrapContainer: {
        flexDirection: 'row',
        borderRightColor: '#d1cfd6',
        borderRightWidth: 2
    },
    leftContainer: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 10,

        
    },
    wrap: {
        borderBottomColor:'#d1cfd6',
        borderBottomWidth: 2,
        width: '30%',
        height: 80
    },
    textWrap: {
        flexDirection: 'row',
        
    },
    rightText: {
        fontSize: 20,
        marginLeft: 15,
        
    },
    group: {
        fontSize: 15,
        marginLeft: 10
    },
    subText: {
        fontSize: 15,
        marginLeft: 10
    },
    organizer: {
        marginTop: 5,
        fontSize: 11,
        marginLeft: 10,
    },
    organizerName: {
        fontSize:11,
        marginLeft: 10
    },
    textTopWrap: {
        flexDirection: 'row',
        justifyContent: "space-between"
    }



    

});

export default EventComponent;