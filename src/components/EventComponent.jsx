import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';

// イベントのコンポーネント

const EventComponent = ({ eventData: { item } }) => {
  return (
    <View style={styles.frame}>
      <View style={styles.innerFrame}>
        <View style={styles.image}>
          <Image
            style={{ width: wp('79%'), height: hp('20%'), borderRadius: 5 }}
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
              {/* グループ名を表示している部分 */}
              <TouchableOpacity>
                <Text allowFontScaling={false} style={styles.group}>
                  {item.group}
                </Text>
              </TouchableOpacity>

              {/* イベント名が表示されている部分 */}
              <TouchableOpacity>
                <Text allowFontScaling={false} style={styles.subText}>
                  {item.mainTitle}
                </Text>
              </TouchableOpacity>

              {/* ユーザー名や主催者名を表示している部分 */}
              <TouchableOpacity>
                <Text allowFontScaling={false} style={styles.organizer}>
                  {item.author}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // イベントの枠全体を囲っているスタイルの部分
  frame: {
    height: hp('40%'),
    width: wp('85%'),
    borderRadius: 10,
  },
  // イベントの枠自体の部分、外枠の線など
  innerFrame: {
    borderColor: '#d1cfd6',
    borderWidth: 2,
    height: hp('33%'),
    width: wp('80%'),
    borderRadius: 5,
  },
  // 画像のスタイル部分
  image: {
    height: hp('20%'),
    width: wp('72%'),
    borderBottomColor: '#d1cfd6',
    borderBottomWidth: 2,
  },
  // 画像より下の部分の箱
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
    marginBottom: 2,
  },
  group: {
    fontSize: hp('1.8%'),
    marginLeft: 10,
    marginBottom: 5,
  },
  subText: {
    fontSize: hp('1.5%'),
    marginLeft: 10,
    marginBottom: 5,
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
