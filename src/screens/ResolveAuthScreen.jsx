import { useContext, useEffect } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);
  tryLocalSignin();
  // 未検証
  // useEffect(() => {
  //   const unsubscribeFromAuth = tryLocalSignin();
  //   return () => {
  //     unsubscribeFromAuth();
  //   };
  // }, []);
  return null;
};

export default ResolveAuthScreen;
