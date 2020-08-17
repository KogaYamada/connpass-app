import { Dispatch, SetStateAction } from 'react';
import { InputState } from '../../hooks/useInput';

/*----------------------------------------*/
/*---- 非同期アクションクリエーターのタイプ ----*/
/*----------------------------------------*/
export type TryLocalSignin = () => (dispatch: any) => void;
export type Signup = (
  username: InputState,
  email: InputState,
  password: InputState
) => (dispatch: any) => void;
export type Signin = (
  email: InputState,
  password: InputState
) => (dispatch: any) => void;
export type Signout = () => (dispatch: any) => void;

/**
 * ストアで管理するユーザーのstate.
 */
export interface UserState {
  id: string | null;
  displayName: string | null;
  email: string | null;
  createdAt: firebase.firestore.Timestamp | null;
  description: string | null;
  photoURL: string | null;
}
