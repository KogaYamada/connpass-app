import React, {useState,useEffect} from 'react';
import {FlatList,Text,View, StyleSheet, HorizontalScrollView} from 'react-native';
import EventComponent from '../components/EventComponent';
import { ScrollView } from 'react-native-gesture-handler';
import useInput from '../hooks/useInput';


const EventScreen = ({navigation}) => {
    
    
    return(
        <ScrollView style={styles.viewWrap}>
                <Text style={styles.mainText}>参加イベント</Text>
                <View style={styles.border__1}></View>
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={true}
                >
                <EventComponent />
                <EventComponent />
                <EventComponent />
                <EventComponent />
                <EventComponent />
                <EventComponent />
                <EventComponent />
                <EventComponent />
                </ScrollView>

                <Text style={styles.mainText}>主催イベント</Text>
                <View style={styles.border__2}></View>
                <ScrollView
                    horizontal 
                    showsHorizontalScrollIndicator={true}
                >
                <EventComponent />
                <EventComponent />
                <EventComponent />
                <EventComponent />
                <EventComponent />
                <EventComponent />
                <EventComponent />
                <EventComponent />
                </ScrollView>

                <Text style={styles.mainText}>準備イベント</Text>
                <View style={styles.border__3}></View>
                <ScrollView
                    horizontal 
                    showsHorizontalScrollIndicator={true}
                >
                <EventComponent />
                <EventComponent />
                <EventComponent />
                <EventComponent />
                <EventComponent />
                <EventComponent />
                <EventComponent />
                <EventComponent />
                </ScrollView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    mainText: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5,
        marginTop: 15
        
    },
    border__1: {
        borderBottomColor: '#A82402',
        borderBottomWidth: 4,
        marginBottom: 10,
        width: '60%'
        
    },
    border__2: {
        borderBottomColor: '#ff9900',
        borderBottomWidth: 4,
        marginBottom: 10,
        width: '60%'
    
    },
    border__3: {
        borderBottomColor: '#ffbbbb',
        borderBottomWidth: 4,
        marginBottom: 10,
        width: '60%'
    },
    viewWrap: {
        backgroundColor: 'white'
    }
    
});

export default EventScreen;