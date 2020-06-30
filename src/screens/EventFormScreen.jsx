import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import {View, StyleSheet,ScrollView } from 'react-native';
import SearchBar from './SearchBar';
import EventComponent from './EventComponent';


const EventFormScreen = () => {
    return (
      <>
      <SearchBar />
        <Container>
        <Tabs style={styles.navTab}>
          <Tab heading={ <TabHeading><Text style={styles.textTab}>フロントエンド</Text></TabHeading>}>
          <ScrollView>
          <EventComponent />
          <EventComponent />
          <EventComponent />
          <EventComponent />
          </ScrollView>
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.textTab}>バックエンド</Text></TabHeading>}>
          <ScrollView>
          <EventComponent />
          <EventComponent />
          <EventComponent />
          <EventComponent />
          </ScrollView>
          </Tab>
          <Tab heading={ <TabHeading><Text style={styles.textTab}>インフラ</Text></TabHeading>}>
          <ScrollView>
          <EventComponent />
          <EventComponent />
          <EventComponent />
          <EventComponent />
          </ScrollView>
          </Tab>
        </Tabs>
       
      </Container>
      
      </>
    );
  }

const styles = StyleSheet.create({
  textTab: {
    fontSize: 13,
    fontFamily: 'Arial',
    fontWeight: 'bold'
  },
  
});

export default EventFormScreen;
