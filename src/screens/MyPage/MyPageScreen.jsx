import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-elements';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ProfileSetting from '../../components/MyPage/ProfileSettings.component';


function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

const MyPageScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(1000).then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <ScrollView
      // style={styles.myPage}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.myPageTop}>
        <View style={styles.settingIconView}>
          <TouchableOpacity
            style={styles.settingIconTouch}
            onPress={() => {
              navigation.navigate('Settings');
            }}>
            <Ionicons name="md-settings" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.avatarView}>
            {/* ↓文字数制限必要↓ */}
            <Text style={styles.avatarName}>User Name</Text>
            <Avatar
              rounded
              icon={{ name: 'user', type: 'font-awesome' }}
              overlayContainerStyle={{ backgroundColor: 'pink' }}
              size={90}
            />
          </View>
          <View style={styles.avatarUrlView}>
            <View style={styles.linkView}>
              <Entypo name="link" size={17} color="black" />
              <Text style={styles.avatarUrl}>https://example.com</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.pencil}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}>
          <View style={styles.pencilView}>
            <FontAwesome name="pencil" size={25} color="black" />
          </View>
          {/* モーダルのコンポーネント */}
          <ProfileSetting
            isModalVisible={isModalVisible}
            setModalVisible={setModalVisible}
          />
          {/* ////////////////////// */}
        </TouchableOpacity>
      </View>
      <View style={styles.myPageBottom}>
        <View style={styles.userAbout}>
          <Text style={styles.aboutTitle}>自己紹介</Text>
          <Text style={styles.about}>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  myPageTop: {
    height: hp('30%'),
    backgroundColor: 'skyblue',
  },
  settingIconView: {
    padding: 10,
    marginLeft: '86%',
  },
  container: {
    flexDirection: 'column',
  },
  avatarView: {
    alignItems: 'center',
    marginBottom: '3%',
    paddingHorizontal: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatarName: {
    width: wp('50%'),
    fontSize: hp('3.5%'),
    paddingRight: '5%',
  },
  avatarUrlView: {
    paddingHorizontal: wp('10%'),
  },
  linkView: {
    flexDirection: 'row',
  },
  avatarUrl: {
    fontSize: hp('1.7%'),
    marginLeft: 5,
  },
  pencil: {
    width: wp('20%'),
    height: hp('5%'),
    top: '-5%',
    left: '72%',
  },
  pencilView: {
    width: wp('11%'),
    height: hp('5.2%'),
    borderWidth: 1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
  },
  myPageBottom: {
    // backgroundColor: 'pink',
    // height: hp('51.4%'),
    // height: 'auto',
  },
  userAbout: {
    paddingHorizontal: '10%',
  },
  aboutTitle: {
    fontSize: hp('2.5%'),
    marginBottom: 10,
  },
  about: {
    fontSize: hp('1.5%'),
    lineHeight: 20,
  },
});

export default MyPageScreen;
