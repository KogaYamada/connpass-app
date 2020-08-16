import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';

import Title from '../../atoms/title/title.component';
import Button from '../../atoms/button/button.component';

interface SocialLoginPros {}

const SocialLogin: FC<SocialLoginPros> = (): JSX.Element => {
  return (
    <View>
      <Title size="small" sideBarColor="red">
        お持ちのアカウントでログイン
      </Title>
      <Button title="Twitterでログイン" />
      <Button title="Facebookでログイン" />
      <Button title="GitHubでログイン" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SocialLogin;
