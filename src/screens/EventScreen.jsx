import React, { useState, useEffect } from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  HorizontalScrollView,
} from 'react-native';
import EventComponent from '../components/EventComponent';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import useInput from '../hooks/useInput';
import { firestore } from '../api/firebase/firebase';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  addDummyJoinedEvent,
  addDummyHostEvent,
  addDummystandbyEvent,
  addDummyEvent,
} from '../utils/firebase.data';
import { Button } from 'react-native';

const EventScreen = ({ navigation }) => {
  const [joinEvents, setJoinEvents] = useState(null);
  const [hostEvents, setHostEvent] = useState(null);
  const [standbyEvents, setStandbyEvent] = useState(null);

  useEffect(() => {
    firestore
      .collection('version/1/users/MJpyUalJPCO2zIJ6J6fd3mOzwTo2/joinEvent')
      .get()
      .then((querySnapshot) => {
        let joinEventsArray = [];
        querySnapshot.forEach((doc) => {
          joinEventsArray = [...joinEventsArray, doc.data()];
        });
        setJoinEvents(joinEventsArray);
      });

    firestore
      .collection('version/1/users/MJpyUalJPCO2zIJ6J6fd3mOzwTo2/hostEvent')
      .get()
      .then((querySnapshot) => {
        let hostEventArray = [];
        querySnapshot.forEach((doc) => {
          hostEventArray = [...hostEventArray, doc.data()];
        });
        setHostEvent(hostEventArray);
      });

    firestore
      .collection('version/1/users/MJpyUalJPCO2zIJ6J6fd3mOzwTo2/standbyEvent')
      .get()
      .then((querySnapshot) => {
        let standbyEventArray = [];
        querySnapshot.forEach((doc) => {
          standbyEventArray = [...standbyEventArray, doc.data()];
        });
        setStandbyEvent(standbyEventArray);
      });
  }, []);

  return (
    <ScrollView>
      {/* <Button onPress={addDummyJoinedEvent} title="add dummy join data" /> */}
      {/* <Button onPress={addDummyHostEvent} title="add dummy host data" /> */}
      {/* <Button onPress={addDummystandbyEvent} title="add dummy standby data" /> */}
      {/* <Button onPress={addDummyEvent} title="add dummy event data" /> */}

      <Text style={styles.mainText}>参加イベント</Text>
      <View style={styles.border__1}></View>

      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        {joinEvents && (
          <FlatList
            horizontal
            data={joinEvents}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('EventFrame')}>
                <EventComponent eventData={item} />
              </TouchableOpacity>
            )}
          />
        )}
      </ScrollView>

      <Text style={styles.mainText}>主催イベント</Text>
      <View style={styles.border__2}></View>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        {hostEvents && (
          <FlatList
            horizontal
            data={hostEvents}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('EventFrame')}>
                <EventComponent eventData={item} />
              </TouchableOpacity>
            )}
          />
        )}
      </ScrollView>

      <Text style={styles.mainText}>準備イベント</Text>
      <View style={styles.border__3}></View>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        {standbyEvents && (
          <FlatList
            horizontal
            data={standbyEvents}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('EventFrame')}>
                <EventComponent eventData={item} />
              </TouchableOpacity>
            )}
          />
        )}
      </ScrollView>

      {/* コンポーネントのサンプルページへ遷移！！！ */}
      <Text
        onPress={() => {
          navigation.navigate('Test');
        }}>
        テストページへ
      </Text>
      {/* ------------------------------------ */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainText: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    padding: 5,
    marginTop: 5,
  },
  border__1: {
    borderBottomColor: '#A82402',
    borderBottomWidth: 4,
    marginBottom: 25,
    width: wp('50%'),
  },
  border__2: {
    borderBottomColor: '#ff9900',
    borderBottomWidth: 4,
    marginBottom: 25,
    width: wp('50%'),
  },
  border__3: {
    borderBottomColor: '#ffbbbb',
    borderBottomWidth: 4,
    marginBottom: 25,
    width: wp('50%'),
  },
});

export default EventScreen;
