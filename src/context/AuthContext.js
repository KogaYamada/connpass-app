import createDataContxt from './createDataContext';
import { auth, createUserProfileDocument } from '../api/firebase/firebase';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return { ...state, currentUser: action.payload };
    case 'SIGN_OUT':
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }, emailValidation) => {
  try {
    const user = await auth.createUserWithEmailAndPassword(
      email.value,
      password.value
    );
    /*TODO: add user data for firestore */
    /*TODO: navigate to home */
    dispatch({ type: 'SIGN_UP', payload: user });
  } catch (err) {
    emailValidation(err.code);
    await console.log(err);
  }
};

const signin = () => {};

const signout = (dispatch) => () => {
  auth.signOut();
  /*TODO: navigate to signin */
  dispatch({ type: 'SIGN_OUT', payload: null });
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
