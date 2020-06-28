import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-elements';

const MyPageScreen = () => {
  return (
    <View>
      <View style={styles.avatarView}>
        <Avatar
          rounded
          icon={{ name: 'user', type: 'font-awesome' }}
          overlayContainerStyle={{backgroundColor: 'pink'}}
          size="xlarge"
        />
        <Text style={styles.avatarName}>User Name</Text>
      </View>
      <TouchableOpacity>
        <Text>プロフィール設定</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>設定</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>ログアウト</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MyPageScreen;
