import { createSlice } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import {} from 'react-redux';
import firebase, {
  auth,
  createUserProfileDocument,
} from '../../api/firebase/firebase';

import { authValidation } from '../../utils/firebase.errors';

import { navigate } from '../../navigationRef';

import { UserState, SignupArguments, SigninArguments } from './types';

const initialState: UserState = {
  id: null,
  displayName: null,
  email: null,
  createdAt: null,
  description: null,
  photoURL: null,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: UserState, action): UserState => {
      return { ...action.payload };
    },
  },
});
/*-------------------------------------------------------*/
/*------------------   async actions   ------------------*/
/*-------------------------------------------------------*/
const { setUser } = slice.actions;

export const tryLocalSignin = () => async (dispatch: any) => {
  auth.onAuthStateChanged(async (user: firebase.User | null) => {
    if (user) {
      const userRef = await createUserProfileDocument(user);
      userRef?.onSnapshot((snapshot) => {
        dispatch(setUser({ id: snapshot.id, ...snapshot.data() }));
      });
    }
    dispatch(setUser(initialState));
    navigate('LoginFlow');
  });
};

export const signup = ({
  username,
  email,
  password,
}: SignupArguments) => async (dispatch: any) => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(
      email.value,
      password.value
    );
    user?.updateProfile({ displayName: username.value });

    const userRef = await createUserProfileDocument(user, {
      displayName: username.value,
    });

    userRef?.onSnapshot((snapshot) => {
      dispatch(setUser({ id: snapshot.id, ...snapshot.data() }));
    });
    /*TODO: navigate to tutorial */
    navigate('Home');
  } catch (error) {
    const { type, message } = authValidation(error.code);
    switch (type) {
      case 'email':
        email.addErrorMessage(message);
        break;
      case 'password':
        password.addErrorMessage(message);
        break;
      case 'other':
        Alert.alert(message);
        break;
    }
    console.log(error);
  }
};

export const signin = ({ email, password }: SigninArguments) => async (
  dispatch: any
) => {
  try {
    const { user } = await auth.signInWithEmailAndPassword(
      email.value,
      password.value
    );
    const userRef = await createUserProfileDocument(user);
    userRef?.onSnapshot((snapshot) => {
      dispatch(setUser({ id: snapshot.id, ...snapshot.data() }));
    });
    navigate('Home');
  } catch (error) {
    const { type, message } = authValidation(error.code);
    switch (type) {
      case 'email':
        email.addErrorMessage(message);
        break;
      case 'password':
        password.addErrorMessage(message);
        break;
      case 'other':
        Alert.alert(message);
        break;
    }
    console.log(error);
  }
};

export const signout = () => async (dispatch: any) => {
  auth.signOut();
  dispatch(setUser(initialState));
  navigate('LoginFlow');
};

export default slice.reducer;
