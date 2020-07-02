import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { Input, Icon } from 'react-native-elements';
import useInput from '../../hooks/useInput';

const NameSetting = () => {
  return (
    <ScrollView style={styles.inputContainer}>
      <View style={{ flexDirection: 'row' }}>
        <Icon
          name="user-edit"
          type="font-awesome-5"
          size={17}
          color="#c7c7cd"
        />
        <Input style={styles.userName} label="ニックネーム" />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Icon name="link" type="feather" size={20} color="#c7c7cd" />
        <Input style={styles.userUrl} label="URLなど" />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Icon name="profile" type="antdesign" size={20} color="#c7c7cd" />
        <Input
          inputStyle={{ height: 100 }}
          style={styles.userIntroduction}
          label="自己紹介"
          multiline={true}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#f9f9f9',
    paddingVertical: 20,
    paddingLeft: 20,
    paddingRight: 40,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  userName: {},
  userUrl: {},
  userIntroduction: {
    textAlignVertical: 'top',
  },
});

export default NameSetting;
