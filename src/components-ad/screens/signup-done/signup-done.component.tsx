import React from 'react';
import { View } from 'native-base';
import Title from '../../atoms/title/title.component';
import { StyleSheet } from 'react-native';
import ProgressBar from '../../molecules/progress-bar.components';
import Text from '../../atoms/text.components';
import Button from '../../atoms/button/button.component';

const SingupDone = () => {
  return (
    <View style={{padding: 33}}>
      <View style={{marginBottom: 47}}>
        <Title size="large" textAlign="center">
          新規会員登録
        </Title>
      </View>
      <View style={{marginBottom: 42}}>
        <ProgressBar
          progressText="メール登録"
          status="complete"
          progressText2="完了"
          status2="now"
          complete={true}
        />
      </View>
      <View style={{marginBottom: 40}}>
        <Text textAlign="center">会員登録が完了しました。</Text>
      </View>
      <View style={{marginBottom: 22}}>
        <Text textAlign="center" size='small'>
          入力いただいたメールアドレスに確認メールを送信しました。
          確認メールが届くまでしばらく時間がかかりますが、メールが
          届くまでの間にもほとんどの機能がご利用いただけますので引
          き続きconnpassをご利用ください。一日〜数日経ってもメー
          ルが届かないようであればお手数ですが、問い合わせからご連
          絡をお願いします。
        </Text>
      </View>
      <View style={{marginBottom: 54}}>
        <Text textAlign="center" size='small'>
          他アカウントとの連携は、「マイページ→設定」で変更するこ
          とができます。ぜひご利用ください。
        </Text>
      </View>
      <View style={{}}>
        <Button size='large' title='利用を開始する' color='green' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SingupDone;
