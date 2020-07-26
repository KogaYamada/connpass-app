import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// イベントのコンポーネント

const EventComponent = ({ eventData: { item } }) => {
  return (
    <View style={styles.frame}>
      <View style={styles.innerFrame}>
        <View style={styles.image}>
          <Image
            style={{ width: 298, height: 160, borderRadius: 5 }}
            source={{ uri: item.imageUrl }}
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
            <View style={{ width: 180, height: 50 }}>
              <Text allowFontScaling={false} style={styles.group}>
                {item.group}
              </Text>
              <Text allowFontScaling={false} style={styles.subText}>
                {item.mainTitle}
              </Text>
              <Text allowFontScaling={false} style={styles.organizer}>
                {item.author}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    height: hp('35%'),
    width: wp('80%'),
    borderRadius: 10,
  },
  innerFrame: {
    borderColor: '#d1cfd6',
    borderWidth: 2,
    height: hp('30%'),
    width: wp('72.8%'),
    borderRadius: 5,
  },
  image: {
    height: hp('18%'),
    width: wp('72%'),
    borderBottomColor: '#d1cfd6',
    borderBottomWidth: 2,
  },
  month: {
    backgroundColor: '#d1cfd6',
  },
  wrapContainer: {
    flexDirection: 'row',
    borderRightColor: '#d1cfd6',
    borderRightWidth: 2,
    padding: 5,
  },
  leftContainer: {
    fontSize: hp('2%'),
    textAlign: 'center',
    margin: 10,
  },
  textWrap: {
    flexDirection: 'row',
    // justifyContent: "space-between",
    height: hp('11.6%'),
    width: wp('100%'),
    
  },
  rightText: {
    fontSize: hp('1.8%'),
    marginLeft: 15,
    marginBottom: 2
  },
  group: {
    fontSize: hp('1.8%'),
    marginLeft: 10,
    marginBottom: 5
  },
  subText: {
    fontSize: hp('1.5%'),
    marginLeft: 10,
    marginBottom: 5
  },
  organizer: {
    fontSize: hp('1.3%'),
    marginLeft: 10,
  },
  textTopWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
});

export default EventComponent;
