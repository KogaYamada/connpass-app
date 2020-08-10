import React, { Component, useState, useEffect } from 'react';
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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const onSearchSubmit = (term) => {
  console.log(term);
};

const EventFormScreen = ({ navigation }) => {
  const [term, setTerm] = useState([]);

  useEffect(() => {
    firestore
      .collection('version/1/users/MJpyUalJPCO2zIJ6J6fd3mOzwTo2/joinEvent')
      .get()
      .then(() => {});
  }, []);

  return (
    <>
      <SafeAreaView style={{ width: wp('100%') }}>
        <SearchBar
          term={term}
          onTermChange={term.value}
          onTermSubmit={onSearchSubmit}
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
              <ScrollView showsVerticalScrollIndicator={false}>
                {/* <EventComponent />
          <EventComponent />
          <EventComponent />
          <EventComponent /> */}
              </ScrollView>
            </View>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text style={styles.textTab}>バックエンド</Text>
              </TabHeading>
            }>
            <View style={styles.viewWrap}>
              <ScrollView showsVerticalScrollIndicator={false}>
                {/* <EventComponent />
          <EventComponent />
          <EventComponent />
          <EventComponent /> */}
              </ScrollView>
            </View>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text style={styles.textTab}>インフラ</Text>
              </TabHeading>
            }>
            <View style={styles.viewWrap}>
              <ScrollView showsVerticalScrollIndicator={false}>
                {/* <EventComponent />
          <EventComponent />
          <EventComponent />
          <EventComponent /> */}
              </ScrollView>
            </View>
          </Tab>
        </Tabs>
        <View style={styles.buttonAllWrap}>
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
        </View>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  viewWrap: {
    width: '100%',
    textAlign: 'center',
    alignItems: 'flex-end',
    marginRight: 30,
  },
  textTab: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
  registerButton: {
    width: wp('70%'),
    height: hp('100%'),
    marginBottom: 50,
    flex: 1,
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#b6192e',
  },
  buttonWrap: {
    width: wp('100%'),
    alignItems: 'center',
    height: hp('12%'),
  },
  buttonText: {
    width: '100%',
    textAlign: 'center',
  },
  entireWrap: {
    textAlign: 'center',
  },
});

export default EventFormScreen;
