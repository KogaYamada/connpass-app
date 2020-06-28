
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
import { CheckBox, Button } from 'react-native-elements';
import SignupSpacer from '../components/SignupSpacer';
import useInput from '../hooks/useInput';

const SignupScreen = () => {
  // hooks
  const [isConsent, setIsConsent] = useState(false);
  const username = useInput('');
  const email = useInput('');
  const password = useInput('');
  const passwordConfirm = useInput('');

  // render
  return (
    <ScrollView>
      <SafeAreaView>
        <Image source={require('../../assets/connpass_logo_1.png')} />
        <View style={styles.title}>
          <Text style={styles.titleText}>新規会員登録</Text>
        </View>
        <SignupSpacer>
          <Text style={{ textAlign: 'center' }}>
            このサービスを始めるための
          </Text>
          <Text style={{ textAlign: 'center', marginBottom: 10 }}>
            最低限の情報を入力したください。
          </Text>
          <View style={styles.inputArea}>
            <Text style={styles.label}>ユーザー名</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              {...username}
            />
          </View>
          <Text style={styles.message}>
            半角英数字・次の記号(-_)で30文字以内
          </Text>
          <Text>※サイト内IDとしても利用します</Text>
          <View style={styles.inputArea}>
            <Text style={styles.label}>メールアドレス</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              {...email}
            />
          </View>
          <Text style={styles.message}>半角英数字</Text>
          <View style={styles.inputArea}>
            <Text style={styles.label}>パスワード</Text>
            <TextInput
              secureTextEntry
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              {...password}
            />
          </View>
          <Text style={styles.message}>半角英数字で6文字以上</Text>
          <View style={styles.inputArea}>
            <Text style={styles.label}>パスワード(確認)</Text>
            <TextInput
              secureTextEntry
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              {...passwordConfirm}
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
            />
          </View>
        </SignupSpacer>
      </SafeAreaView>
    </ScrollView>
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
  },
  label: {
    fontSize: 16,
    paddingTop: 5,
    paddingLeft: 10,
  },
  inputArea: {
    height: 60,
    backgroundColor: '#DFDFDF',
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },
  input: {
    height: 40,
    marginHorizontal: 8,
  },
});

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignupScreen;
