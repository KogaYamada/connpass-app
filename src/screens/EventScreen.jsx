import React from 'react';
import {FlatList, StyleSheet, HorizontalScrollView} from 'react-native';
import EventComponent from '../../components/EventComponent';
import { ScrollView } from 'react-native-gesture-handler';


const EventScreen = ({navigation}) => {
    return(
        <>
        <ScrollView>
        <EventComponent />
        <EventComponent />
        <EventComponent />
        </ScrollView>
        </>

        
    );
};

const styles = StyleSheet.create({
    
});

export default EventScreen;