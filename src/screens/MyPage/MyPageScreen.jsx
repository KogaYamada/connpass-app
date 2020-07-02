import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar, ListItem, Icon } from 'react-native-elements';

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

const MyPageScreen = ({ navigation }) => {
  // メニューのリスト
  const list = [
    {
      title: 'プロフィール設定',
      icon: 'user-cog',
      type: 'font-awesome-5',
      root: 'ProfileSettings',
    },
    {
      title: '通知設定',
      icon: 'md-notifications',
      type: 'ionicon',
      root: 'Notification',
    },
    {
      title: 'その他の設定',
      icon: 'md-settings',
      type: 'ionicon',
      root: 'Settings',
    },
  ];

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(1000).then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <View style={styles.avatarView}>
          <Avatar
            rounded
            icon={{ name: 'user', type: 'font-awesome' }}
            overlayContainerStyle={{ backgroundColor: 'pink' }}
            size={110}
          />
          <Text style={styles.avatarName}>User Name</Text>
        </View>
        <View style={styles.listContainer}>
          {list.map((item, i) => (
            <TouchableOpacity onPress={() => navigation.navigate(item.root)}>
              <ListItem
                key={i}
                title={item.title}
                leftIcon={() => {
                  return (
                    <Icon
                      name={item.icon}
                      type={item.type}
                      style={{ width: 50 }}
                    />
                  );
                }}
                bottomDivider
                chevron
              />
            </TouchableOpacity>
          ))}
        </View>
        {/* <View style={styles.logOutView}>
          <TouchableOpacity style={styles.logOutTouch}>
            <Text style={styles.logoutText}>ログアウト</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  avatarView: {
    alignItems: 'center',
    paddingTop: '10%',
    paddingBottom: '30%',
    // flex: 1,
  },
  // listContainer: {
  //   flex: 1,
  // },
  avatarName: {
    marginTop: 15,
    fontSize: 25,
  },
  logOutView: {
    marginTop: 20,
    alignItems: 'center',
  },
  logOutTouch: {
    borderWidth: 2,
    borderColor: '#ee4400',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
    width: 150,
    borderRadius: 5,
  },
  logoutText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#ee4400',
  },
});

export default MyPageScreen;
