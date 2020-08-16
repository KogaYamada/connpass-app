import createDataContxt from './createDataContext';
import { auth, createUserProfileDocument } from '../api/firebase/firebase';
import { authValidation } from '../utils/firebase.errors';
import { navigate } from '../navigationRef';

// types
const SIGN_UP_AND_SIGN_IN = 'SIGN_UP_AND_SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';

// reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case SIGN_UP_AND_SIGN_IN:
      return { ...state, currentUser: action.payload };
    case SIGN_OUT:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () =>
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const userRef = await createUserProfileDocument(user);
      userRef.onSnapshot((snapShot) => {
        dispatch({
          type: SIGN_UP_AND_SIGN_IN,
          payload: { id: snapShot.id, ...snapShot.data() },
        });
        navigate('Home');
      });
    } else {
      navigate('Signin');
      dispatch({ type: SIGN_OUT });
    }
  });

const signup = (dispatch) => async ({ email, password, username }) => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(
      email.value,
      password.value
    );

    user.updateProfile({ displayName: username.value });

    const userRef = await createUserProfileDocument(user, {
      displayName: username.value,
    });
    userRef.onSnapshot((snapShot) => {
      dispatch({
        type: SIGN_UP_AND_SIGN_IN,
        payload: { id: snapShot.id, ...snapShot.data() },
      });
      /*TODO: navigate to tutorial */
      navigate('Home');
    });
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
        alert(message);
        break;
      default:
        break;
    }
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const { user } = await auth.signInWithEmailAndPassword(
      email.value,
      password.value
    );
    const userRef = await createUserProfileDocument(user);
    userRef.onSnapshot((snapShot) => {
      dispatch({
        type: SIGN_UP_AND_SIGN_IN,
        payload: { id: snapShot.id, ...snapShot.data() },
      });
      navigate('Home');
    });
    dispatch({ type: SIGN_UP_AND_SIGN_IN, payload: user });
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
        alert(message);
        break;
      default:
        break;
    }
    console.log(error);
  }
};

const signout = (dispatch) => () => {
  auth.signOut();
  navigate('LoginFlow');
  dispatch({ type: SIGN_OUT });
};

export const { Provider, Context } = createDataContxt(
  authReducer,
  {
    signin,
    signup,
    signout,
    tryLocalSignin,
  },
  { currentUser: null }
);
