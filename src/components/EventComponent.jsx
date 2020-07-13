import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

// イベントのコンポーネント
const EventComponent = ({ eventData: { item } }) => {
  console.log(item);
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
    height: 280,
    width: 320,
    borderRadius: 10,
  },
  innerFrame: {
    borderColor: '#d1cfd6',
    borderWidth: 2,
    height: 260,
    width: 300,
    borderRadius: 5,
  },
  image: {
    height: 160,
    width: 299,
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
    fontSize: 20,
    textAlign: 'center',
  },
  textWrap: {
    flexDirection: 'row',
    // justifyContent: "space-between",
    height: 100,
    width: 300,
  },
  rightText: {
    fontSize: 8,
    marginLeft: 15,
  },
  group: {
    fontSize: 8,
    marginLeft: 10,
  },
  subText: {
    fontSize: 8,
    marginLeft: 10,
  },
  organizer: {
    fontSize: 8,
    marginLeft: 10,
  },
  organizerName: {
    fontSize: 8,
    marginLeft: 10,
  },
  textTopWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
});

export default EventComponent;
