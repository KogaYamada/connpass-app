import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, ListItem, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfileSettings = () => {
  return (
    <View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  avatarView: {
    alignItems: 'center',
    paddingVertical: 40,
  },
});

export default ProfileSettings;
