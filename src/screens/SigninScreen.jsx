import React from 'react';
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Text, Input } from 'react-native-elements';
import SpacerTwenty from '../components/SpacerTwenty';
import useInput from '../hooks/useInput';

const SigninScreen = () => {
  const email = useInput('');
  const password = useInput('');

  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: '#F7F7F7' }}>
        <Image
          style={{ marginLeft: 70 }}
          source={require('../../assets/connpass_logo_1.png')}
        />
        <SpacerTwenty>
          <View style={styles.loginView}>
            <View style={styles.headerView}>
              <Text style={styles.header}>Connpassアカウントでログイン</Text>
            </View>
            <Input inputStyle={styles.input} {...email} />
            <Input inputStyle={styles.input} {...password} />
          </View>
          <View style={styles.loginView}>
            <View style={styles.headerView}>
              <Text style={styles.header}>
                お持ちのアカウントで登録/ログイン
              </Text>
            </View>
          </View>
        </SpacerTwenty>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerView: {
    borderLeftWidth: 3,
    borderLeftColor: '#A82402',
  },
  header: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  loginView: {
    marginHorizontal: 25,
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#EBEBEB',
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 3,
  },
});

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SigninScreen;
