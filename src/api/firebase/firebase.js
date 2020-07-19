import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDT2RoxJOR79JcQ9sOqiLKdCUAMmDKSsNA',
  authDomain: 'connpass-app-cbe80.firebaseapp.com',
  databaseURL: 'https://connpass-app-cbe80.firebaseio.com',
  projectId: 'connpass-app-cbe80',
  storageBucket: 'connpass-app-cbe80.appspot.com',
  messagingSenderId: '24734706535',
  appId: '1:24734706535:web:89830de317c37438a89dc2',
  measurementId: 'G-2P840P6RBL',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, addtionaldata) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`version/1/users/${userAuth.uid}`);

  const snapshot = userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...addtionaldata,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userAuth;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const strage = firebase.storage();

export default firebase;
