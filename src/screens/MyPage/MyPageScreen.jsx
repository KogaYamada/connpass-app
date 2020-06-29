import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Avatar, ListItem, Icon } from 'react-native-elements';

const MyPageScreen = ({ navigation }) => {
  // メニューのリスト
  const list = [
    {
      title: 'プロフィール設定',
      icon: 'user-cog',
      type: 'font-awesome-5',
      navigation: 'ProfileSettings',
    },
    {
      title: '通知設定',
      icon: 'md-notifications',
      type: 'ionicon',
    },
    {
      title: '設定',
      icon: 'md-settings',
      type: 'ionicon',
      navigation: 'Settings',
    },
  ];

  return (
    <View>
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
          <TouchableOpacity>
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
              onPress={() => {
                navigation.navigate(item.navigation);
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
    </View>
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
    marginTop: 40,
  },
  logOut: {
    fontWeight: '500',
  },
});

export default MyPageScreen;
