import React, { Component, useState, useEffect} from 'react';
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text,
  Button,
  
} from 'native-base';
import MaterialTabs from 'react-native-material-tabs';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import SearchBar from '../components/SearchBar';
import EventComponent from '../components/EventComponent';
import { firestore } from '../api/firebase/firebase';

const EventFormScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    firestore
      .collection('version/1/users/MJpyUalJPCO2zIJ6J6fd3mOzwTo2/joinEvent')
      .get()
      .then((querySnapshot) => {
        let joinEventsArray = [];
        querySnapshot.forEach((doc) => {
          joinEventsArray = [...joinEventsArray, doc.data()];
        });
        setTerm(joinEventsArray);
      });
  },[])
  console.log(setTerm)
  
  return (
    <>
    <SafeAreaView>
      <SearchBar 
      term={term}
      onTermChange={setTerm}
      onTeamSubmit={() => joinEventsArray(term)}
      />
    </SafeAreaView>
      <Container>
        <Tabs style={styles.textTab}>
          <Tab
            activeTabStyle={{ backgroundColor: 'red' }}
            heading={
              <TabHeading>
                <Text style={styles.textTab}>フロントエンド</Text>
              </TabHeading>
            }>
            <View style={styles.viewWrap}>
              <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
            </View>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text style={styles.textTab}>バックエンド</Text>
              </TabHeading>
            }>
            <View style={styles.viewWrap}>
              <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
            </View>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text style={styles.textTab}>インフラ</Text>
              </TabHeading>
            }>
            <View style={styles.viewWrap}>
              <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
            </View>
          </Tab>
        </Tabs>
        <View style={styles.buttonWrap}>
          <Button
            style={styles.registerButton}
            full={false}
            rounded
            danger
            onPress={() => navigation.navigate('EventCreate')}>
            <Text style={styles.buttonText}> イベントを作成する</Text>
          </Button>
        </View>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  viewWrap: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  textTab: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
  registerButton: {
    width: '70%',
    height: 100,
    marginBottom: 50,
    flex: 1,
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#b6192e',
  },
  buttonWrap: {
    width: '100%',
    alignItems: 'center',
    height: 100,
  },
  buttonText: {
    width: '100%',
    textAlign: 'center',
  },
});

export default EventFormScreen;
