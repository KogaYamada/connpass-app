import createDataContxt from './createDataContext';
import { auth, createUserProfileDocument } from '../api/firebase/firebase';
import { authValidation } from '../utils/firebaseErrors';

// types
const SIGN_UP_AND_SIGN_IN = 'SIGN_UP_AND_SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';

// reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case SIGN_UP_AND_SIGN_IN:
      return { ...state, currentUser: action.payload };
    case SIGN_OUT:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password, username }) => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(
      email.value,
      password.value
    );
    user.updateProfile({ displayName: username.value });
    /*TODO: add user data for firestore */
    /*TODO: navigate to tutorial */
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

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const { user } = await auth.signInWithEmailAndPassword(
      email.value,
      password.value
    );
    /*TODO: add user data for firestore */
    /*TODO: navigate to home */
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
  /*TODO: navigate to signin */
  dispatch({ type: SIGN_OUT, payload: null });
};

export const { Provider, Context } = createDataContxt(
  authReducer,
  {
    signin,
    signup,
    signout,
  },
  { currentUser: null }
);
