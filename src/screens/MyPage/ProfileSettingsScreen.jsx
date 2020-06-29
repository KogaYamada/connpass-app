import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Avatar, ListItem, Icon } from 'react-native-elements';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import NameSetting from '../../components/MyPage/NameSetting.component';

const ProfileSettings = () => {
  return (
    <ScrollView>
      <View style={styles.avatarView}>
        <TouchableOpacity style={{padding: 4}}>
          <Avatar
            rounded
            icon={{ name: 'user', type: 'font-awesome' }}
            overlayContainerStyle={{ backgroundColor: 'pink' }}
            size="xlarge"
            showAccessory
          />
        </TouchableOpacity>
      </View>
      <NameSetting />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  avatarView: {
    alignItems: 'center',
    paddingVertical: 40,
  },
});

export default ProfileSettings;
