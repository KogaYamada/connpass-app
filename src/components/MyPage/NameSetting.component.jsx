import React from 'react';
import { View, Text, StyleSheet, TextInput, Label } from 'react-native';

import { Input, Icon } from 'react-native-elements';
import useInput from '../../hooks/useInput';

const NameSetting = () => {
  return (
    <View style={styles.inputContainer}>
      <Input
        style={styles.userName}
        label="ニックネーム"
        leftIcon={{ name: 'user-edit', type: 'font-awesome-5', size: 20 }}
      />
      <Input
        style={styles.userUrl}
        label="URLなど"
        leftIcon={{ name: 'link', type: 'font-awesome-5', size: 20 }}
        // leftIconContainerStyle={{ size: 20 }}
      />
      <Input
        style={styles.userIntroduction}
        label="自己紹介"
        leftIcon={{ name: 'profile', type: 'antdesign', size: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: '60%',
    backgroundColor: '#f9f9f9',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  userName: {},
  userUrl: {},
  userIntroduction: {},
});

export default NameSetting;
