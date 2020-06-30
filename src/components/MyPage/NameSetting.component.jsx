import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Label,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import { Input, Icon } from 'react-native-elements';
import useInput from '../../hooks/useInput';

const NameSetting = () => {
  return (
    <ScrollView style={styles.inputContainer}>
      <KeyboardAvoidingView behavior="padding">
        <Input
          style={styles.userName}
          label="ニックネーム"
          leftIcon={{
            name: 'user-edit',
            type: 'font-awesome-5',
            size: 20,
            marginRight: 15,
          }}
        />
        <Input
          style={styles.userUrl}
          label="URLなど"
          leftIcon={{
            name: 'link-variant',
            type: 'material-community',
            size: 20,
            marginRight: 15,
          }}
        />
        <Input
          style={styles.userIntroduction}
          label="自己紹介"
          leftIcon={{
            name: 'profile',
            type: 'antdesign',
            size: 20,
            marginRight: 15,
            paddingLeft: 3,
          }}
        />
      </KeyboardAvoidingView>
    </ScrollView>
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
  userName: {flex: 1},
  userUrl: {},
  userIntroduction: {flex: 1},
});

export default NameSetting;
