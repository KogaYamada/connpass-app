import { InputState } from '../hooks/useInput';

type UsernameValidation = (username: InputState) => boolean;
type EmailValidation = (email: InputState) => boolean;
type PasswordValidation = (
  password: InputState,
  confirmPassword: InputState
) => boolean;
/**
 * 入力されたユーザー名を検証する関数。検証した結果、エラーがあれば`true`を返し、エラーがなければ`false`を返す。
 * @param username ユーザー名入力欄のuseInputインスタンス
 */
export const usernameValidation: UsernameValidation = (username) => {
  return true;
};

/**
 * 入力されたメールアドレスを検証する関数。検証した結果、エラーがあれば`true`を返し、エラーがなければ`false`を返す。
 * @param email メールアドレス入力欄のuseInputインスタンス
 */
export const emailValidation: EmailValidation = (email) => {
  return true;
};

/**
 * 入力されたパスワードと再確認パスワードを検証する関数。検証した結果、エラーがあれば`true`を返し、エラーがなければ`false`を返す。
 * @param password パスワード入力欄のuseInputインスタンス
 * @param confirmPassword 再確認パスワード入力欄のuseInputインスタンス
 */
export const passwordValidation: PasswordValidation = (
  password,
  confirmPassword
) => {
  return true;
};
