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
import SpacerTwenty from '../components/SpacerTwenty';
import useInput from '../hooks/useInput';

const SignupScreen = ({navigation}) => {
  // hooks
  const [isConsent, setIsConsent] = useState(false);
  const username = useInput('');
  const email = useInput('');
  const password = useInput('');
  const passwordConfirm = useInput('');

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
            <Text style={styles.label}>ユーザー名</Text>
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
            <Text style={styles.label}>メールアドレス</Text>
            <Input
              inputStyle={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              {...email}
            />
          </View>
          <Text style={styles.message}>半角英数字</Text>
          <View style={styles.inputArea}>
            <Text style={styles.label}>パスワード</Text>
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
            <Text style={styles.label}>パスワード(確認)</Text>
            <Input
              secureTextEntry
              inputStyle={styles.input}
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
              onPress={()=>navigation.navigate('Event')}
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
});

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignupScreen;
