import { Dispatch, SetStateAction } from 'react';

interface InputState {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onChangeText: (newValue: string) => void;
  errorMessage: string;
  addErrorMessage: (errorMessage: string) => void;
  borderColor: () => string;
  textColor: () => string;
}

export interface UserState {
  id: string | null;
  displayName: string | null;
  email: string | null;
  createdAt: firebase.firestore.Timestamp | null;
  description: string | null;
  photoURL: string | null;
}

export interface SignupArguments {
  username: InputState;
  email: InputState;
  password: InputState;
}

export interface SigninArguments {
  email: InputState;
  password: InputState;
}
