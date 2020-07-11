import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { CheckBox, Button, Input } from 'react-native-elements';
import { auth } from '../api/firebase/firebase';

import SpacerTwenty from '../components/SpacerTwenty';
import useInput from '../hooks/useInput';

const SignupScreen = ({ navigation }) => {
  // hooks
  const [isConsent, setIsConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const username = {
    ...useInput(''),
    showErrorColor: () => (username.errorMessage ? 'red' : 'black'),
  };
  const email = {
    ...useInput(''),
    showErrorColor: () => (username.errorMessage ? 'red' : 'black'),
  };
  const password = {
    ...useInput(''),
    showErrorColor: () => (username.errorMessage ? 'red' : 'black'),
  };
  const confirmPassword = {
    ...useInput(''),
    showErrorColor: () => (username.errorMessage ? 'red' : 'black'),
  };
  /**
   * パスワードの入力内容を検証する。パスワードが5文字以下もしくは、
   * ２つの入力された値が一致しない場合にエラーメッセージを追加してfalseを返す。
   *
   * 検証結果が問題なければtrueを返す。
   */
  const passwordValidation = () => {
    if (password.value.length < 6) {
      password.addErrorMessage('6文字以上で入力してください');
      return false;
    } else if (password.value !== confirmPassword.value) {
      confirmPassword.addErrorMessage('パスワードが一致しません');
      return false;
    } else {
      return true;
    }
  };
  /**
   * ユーザーネームを検証する。文字数が31文字以上もしくは、
   * 0文字以下でエラーメッセージを追加してfalseを返す。
   *
   * 検証結果が問題なければtrueを返す。
   */
  const usernameValidation = () => {
    if (username.value.trim().length > 30) {
      username.addErrorMessage('30文字以内で入力したください');
      return false;
    } else if (username.value.trim().length <= 0) {
      username.addErrorMessage('文字を入力してください');
      return false;
    } else {
      return true;
    }
  };
  /**
   * firebase authへアカウント作成リクエストを送ってエラーが返ってきた場合にエラーコードを元にエラーメッセージを作成する。
   * @param {*} string createUserWithEmailAndPasswordメソッドのエラーコード
   */
  const emailValidation = (errorCode) => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        email.addErrorMessage('このメールアドレスは既に登録されています');
        return;
      default:
        alert('エラーが発生しました。入力内容を確認してください。');
        return;
    }
  };
  const signup = async () => {
    setLoading(true);
    try {
      const user = await auth.createUserWithEmailAndPassword(
        email.value,
        password.value
      );
      console.log(user);
      setLoading(false);
    } catch (err) {
      emailValidation(err.code);
      await console.log(err);
      setLoading(false);
    }
  };

  /**
   * 各検証結果に問題なく、利用規約にチェックが入っている場合にサインアップ関数を実行する。
   */
  const handleSubmit = () => {
    if (!isConsent) {
      alert('利用規約をご確認の上、同意してください');
      return;
    }
    username.addErrorMessage('');
    password.addErrorMessage('');
    confirmPassword.addErrorMessage('');
    email.addErrorMessage('');

    let error = false;
    if (!usernameValidation()) error = true;
    if (!passwordValidation()) error = true;
    if (!error) signup();
    error = false;
  };
  // render
  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={{ marginLeft: 70 }}
          source={require('../../assets/connpass_logo_1.png')}
        />
        <View style={styles.title}>
          <Text style={styles.titleText}>新規会員登録</Text>
        </View>
        <SpacerTwenty>
          <Text style={{ textAlign: 'center' }}>
            このサービスを始めるための
          </Text>
          <Text style={{ textAlign: 'center', marginBottom: 10 }}>
            最低限の情報を入力したください。
          </Text>
          <View style={styles.inputArea}>
            <Text
              style={{
                ...styles.label,
                color: username.errorMessage ? 'red' : 'black',
              }}
            >
              ユーザー名
            </Text>
            <Input
              inputStyle={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              {...username}
            />
          </View>
          <Text style={styles.message}>
            半角英数字・次の記号(-_)で30文字以内
          </Text>
          <Text style={{ marginHorizontal: 10 }}>
            ※サイト内IDとしても利用します
          </Text>
          <View style={styles.inputArea}>
            <Text
              style={{
                ...styles.label,
                color: email.errorMessage ? 'red' : 'black',
              }}
            >
              メールアドレス
            </Text>
            <Input
              inputStyle={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              {...email}
            />
          </View>
          <Text style={styles.message}>半角英数字</Text>
          <View style={styles.inputArea}>
            <Text
              style={{
                ...styles.label,
                color: password.errorMessage ? 'red' : 'black',
              }}
            >
              パスワード
            </Text>
            <Input
              secureTextEntry
              inputStyle={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              {...password}
            />
          </View>
          <Text style={styles.message}>半角英数字で6文字以上</Text>
          <View style={styles.inputArea}>
            <Text
              style={{
                ...styles.label,
                color: confirmPassword.errorMessage ? 'red' : 'black',
              }}
            >
              パスワード(確認)
            </Text>
            <Input
              secureTextEntry
              inputStyle={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              {...confirmPassword}
            />
          </View>
          <View style={{ alignItems: 'center' }}>
            <CheckBox
              title="利用規約に同意する"
              checked={isConsent}
              checkedColor="red"
              onPress={() => {
                setIsConsent(!isConsent);
              }}
            />
            <Button
              disabled={loading}
              loading={loading}
              title="新規登録する"
              buttonStyle={{ backgroundColor: '#f03c3c' }}
              onPress={handleSubmit}
            />
          </View>
        </SpacerTwenty>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    height: 60,
    borderColor: 'grey',
    borderWidth: 2,
    borderTopEndRadius: 37,
    borderTopStartRadius: 37,
    borderBottomWidth: 4,
    borderBottomColor: '#BF1F33',
  },
  titleText: {
    fontSize: 36,
    textAlign: 'center',
    lineHeight: 60,
  },
  message: {
    color: 'blue',
    marginHorizontal: 10,
  },
  label: {
    fontSize: 16,
    paddingTop: 5,
    marginHorizontal: 10,
    backgroundColor: '#DCDCDC',
  },
  input: {
    borderTopEndRadius: 2,
    borderTopStartRadius: 2,
    backgroundColor: '#DCDCDC',
    borderBottomColor: '#707070',
    borderBottomWidth: 2,
    paddingHorizontal: 3,
  },
  errorMessage: {
    color: 'red',
  },
});

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignupScreen;
