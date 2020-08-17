import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { tryLocalSignin } from '../stores/user';
import { useDispatch } from 'react-redux';

const ResolveAuthScreen = () => {
  const dispatch = useDispatch();
  dispatch(tryLocalSignin());
  // 未検証
  // useEffect(() => {
  //   const unsubscribeFromAuth = tryLocalSignin();
  //   return () => {
  //     unsubscribeFromAuth();
  //   };
  // }, []);
  return <Text>ロード中</Text>;
};

export default ResolveAuthScreen;
