import React, { useState, useContext } from 'react';
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
import { Context as AuthContext } from '../context/AuthContext';

import SpacerTwenty from '../components/SpacerTwenty';
import useInput from '../hooks/useInput';

const SignupScreen = ({ navigation }) => {
  const inputColors = {
    borderColor: function () {
      return this.errorMessage ? 'red' : '#707070';
    },
    textColor: function () {
      return this.errorMessage ? 'red' : 'black';
    },
  };
  // hooks
  const { state, signup } = useContext(AuthContext);
  const [isConsent, setIsConsent] = useState(false);
  const username = { ...useInput(''), ...inputColors };
  const email = { ...useInput(''), ...inputColors };
  const password = { ...useInput(''), ...inputColors };
  const confirmPassword = { ...useInput(''), ...inputColors };
  /**
   * パスワードの入力内容を検証する。パスワードが5文字以下もしくは、
   * ２つの入力された値が一致しない場合にエラーブロックに入り、エラーメッセージを追加する。
   */
  const passwordValidation = () => {
    if (password.value.length < 6) {
      password.addErrorMessage('6文字以上で入力してください');
      return true;
    } else if (password.value !== confirmPassword.value) {
      confirmPassword.addErrorMessage('パスワードが一致しません');
      return true;
    } else {
      return false;
    }
  };
  /**
   * ユーザーネームを検証する。文字数が31文字以上もしくは、
   * 0文字以下でエラーブロックに入り、エラーメッセージを追加する。
   */
  const usernameValidation = () => {
    if (username.value.trim().length > 30) {
      username.addErrorMessage('30文字以内で入力したください');
      return true;
    } else if (username.value.trim().length <= 0) {
      username.addErrorMessage('ユーザー名を入力してください');
      return true;
    } else {
      return false;
    }
  };
  /**
   * メールアドレスを検証する。何も入力されていない場合エラーブロックに入り、エラーメッセージを追加する。
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
   * firebase authへアカウント作成リクエストを送ってエラーが返ってきた場合にエラーコードを元にエラーメッセージを作成する。
   *
   * 必要があればエラーコードの処理の種類を増やしていく。
   * @param errorCode createUserWithEmailAndPasswordメソッドのエラーコード
   */
  const emailAuthValidation = (errorCode) => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        email.addErrorMessage('このメールアドレスは既に登録されています');
        return;
      default:
        alert('エラーが発生しました。入力内容を確認してください。');
        return;
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
    if (usernameValidation()) error = true;
    if (passwordValidation()) error = true;
    if (emailValidation()) error = true;
    if (!error) signup({ email, password }, emailAuthValidation);
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
                color: username.textColor(),
              }}
            >
              ユーザー名
            </Text>
            <Input
              inputStyle={{
                ...styles.input,
                borderBottomColor: username.borderColor(),
              }}
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
                color: email.textColor(),
              }}
            >
              メールアドレス
            </Text>
            <Input
              inputStyle={{
                ...styles.input,
                borderBottomColor: email.borderColor(),
              }}
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
                color: password.textColor(),
              }}
            >
              パスワード
            </Text>
            <Input
              secureTextEntry
              inputStyle={{
                ...styles.input,
                borderBottomColor: password.borderColor(),
              }}
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
                color: confirmPassword.textColor(),
              }}
            >
              パスワード(確認)
            </Text>
            <Input
              secureTextEntry
              inputStyle={{
                ...styles.input,
                borderBottomColor: confirmPassword.borderColor(),
              }}
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
