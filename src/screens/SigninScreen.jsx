import React from 'react';
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import SpacerTwenty from '../components/SpacerTwenty';
import useInput from '../hooks/useInput';

const SigninScreen = ({ navigation }) => {
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
            <Input
              placeholder="メールアドレス"
              inputStyle={styles.input}
              {...email}
            />
            <Input
              placeholder="パスワード"
              inputStyle={styles.input}
              {...password}
            />
            <Button title="ログイン" type="outline" onPress={() => navigation.navigate('MyPage')} />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
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
            }}
          >
            <Text>こちら</Text>
            <TouchableOpacity style={styles.linkNavigation}>
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
