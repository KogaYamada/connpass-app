import { useContext, useEffect } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribeFromAuth = tryLocalSignin();
    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  return null;
};

export default ResolveAuthScreen;
