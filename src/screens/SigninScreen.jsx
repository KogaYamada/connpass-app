import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import useInput from '../hooks/useInput';
import useInputError from '../hooks/useInputError';
import SpacerTwenty from '../components/SpacerTwenty';
import { auth } from '../api/firebase/firebase';

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);
  const email = { ...useInput(''), ...useInputError() };
  const password = { ...useInput(''), ...useInputError() };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
    });
  }, []);
  /**
   * メールアドレスを検証する。何も入力されていない場合エラーブロックに入り、エラーメッセージを追加する。
   * @return エラーがあればtrueを返し、エラーがなければfalseを返す。
   */
  const emailValidation = () => {
    if (email.value.trim().length <= 0) {
      email.addErrorMessage('メールアドレスを入力してください');
      return true;
    } else {
      return false;
    }
  };
  /**
   * パスワードの入力内容を検証する。
   * パスワードが入力されていない場合にエラーブロックに入り、エラーメッセージを追加する。
   * @return エラーがあればtrueを返し、エラーがなければfalseを返す。
   */
  const passwordValidation = () => {
    if (!password.value.length) {
      password.addErrorMessage('パスワードを入力してください');
      return true;
    } else {
      return false;
    }
  };
  /**
   * 各検証結果に問題ない場合にサインイン関数を実行する。
   */
  const handleSubmit = () => {
    email.addErrorMessage('');
    password.addErrorMessage('');

    let error = false;
    error = passwordValidation();
    error = emailValidation();
    if (!error) signin({ email, password });
    error = false;
  };

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
            <Input
              placeholder="メールアドレス"
              inputStyle={styles.input}
              {...email}
            />
            <Input
              secureTextEntry
              placeholder="パスワード"
              inputStyle={styles.input}
              {...password}
            />
            <Button
              title="ログイン"
              type="outline"
              onPress={() => {
                handleSubmit();
                // navigation.navigate('MyPage')
              }}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text>※パスワードを忘れた方は</Text>
              <TouchableOpacity style={styles.linkNavigation}>
                <Text>パスワード再設定へ</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.loginMessage}>
            Twitter / Facebook / GitHub ボタンから
            お持ちのアカウントで新規登録を行ってください。
          </Text>
          <Text style={styles.loginMessage}>
            ソーシャルのアカウントをお持ちでない方は、
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text>こちら</Text>
            <TouchableOpacity
              style={styles.linkNavigation}
              onPress={() => {
                navigation.navigate('Signup');
              }}>
              <Text>新規会員登録</Text>
            </TouchableOpacity>
            <Text>をご利用ください。</Text>
          </View>
          <View style={styles.loginView}>
            <View style={styles.headerView}>
              <Text style={styles.header}>
                お持ちのアカウントで登録/ログイン
              </Text>
            </View>
            <Button
              buttonStyle={styles.socialButton}
              titleStyle={styles.socialButtonTitle}
              title="Twitterで登録/ログイン"
              type="outline"
            />
            <Button
              buttonStyle={styles.socialButton}
              titleStyle={styles.socialButtonTitle}
              title="Facebookで登録/ログイン"
              type="outline"
            />
            <Button
              buttonStyle={styles.socialButton}
              titleStyle={styles.socialButtonTitle}
              title="Githubで登録/ログイン"
              type="outline"
            />
          </View>

          {/* TODO Delete this */}
          <Button
            onPress={() => {
              navigation.navigate('mainFlow');
            }}
            title="TEST NAV"
          />
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
  linkNavigation: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  loginMessage: {
    textAlign: 'center',
    marginHorizontal: 10,
  },
  socialButton: {
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
  },
  socialButtonTitle: {
    color: '#000000',
  },
});

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SigninScreen;
