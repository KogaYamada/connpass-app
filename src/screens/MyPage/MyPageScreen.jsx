import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
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
      <View style={styles.avatarView}>
        <Avatar
          rounded
          icon={{ name: 'user', type: 'font-awesome' }}
          overlayContainerStyle={{ backgroundColor: 'pink' }}
          size="xlarge"
        />
        <Text style={styles.avatarName}>User Name</Text>
      </View>
      <View>
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
      <View style={styles.logOutView}>
        <Button title="ログアウト" color="red" style={styles.logOut} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  avatarView: {
    alignItems: 'center',
    padding: 40,
  },
  avatarName: {
    marginTop: 30,
    fontSize: 25,
  },
  logOutView: {
    marginTop: 20,
  },
});

export default MyPageScreen;
