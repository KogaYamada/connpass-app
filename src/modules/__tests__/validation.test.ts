import useInput from '../../hooks/useInput';
import {
  usernameValidation,
  emailValidation,
  passwordValidation,
} from '../validation';

const userMock = {
  // 文字数が0文字でtrueを返す
  test1: {
    value: '',
  },
  // 文字数1文字でfalseを返す
  test2: {
    value: 'a',
  },
  // 文字数30文字を超えるとtrueを返す
  test3: {
    value: '1234567890123456789012345678901',
  },
  // 文字数30文字でfalseを返す
  test4: {
    value: '123456789012345678901234567890',
  },
  // 不正な文字でtrueを返す
  test5: {
    value: 'こ`@\'"/|?!&%$#(){}*~^.,<>',
  },
};

const emailMock = {
  // 文字数が0文字でtrueを返す
  test1: {
    value: '',
  },
  // 文字数1文字でfalseを返す
  test2: {
    value: 'a',
  },
};

const passMock = {
  // 文字数が5文字でtrueを返す
  test1: {
    pass: {
      value: '12345',
    },
    conf: {
      value: '1234567',
    },
  },
  // 文字数が6文字でfalseを返す
  test2: {
    pass: {
      value: '123456',
    },
    conf: {
      value: '1234567',
    },
  },
  // passwordとconfirmPasswordが不一致でtrueを返す
  test3: {
    pass: {
      value: '12345678',
    },
    conf: {
      value: '123456789',
    },
  },
  // passwordとconfirmPasswordが一致していればでfalseを返す
  test4: {
    pass: {
      value: '123456789',
    },
    conf: {
      value: '123456789',
    },
  },
};
describe('usernameValidationのテスト', () => {
  test('1.文字数が0文字でtrueを返す', () => {
    expect(usernameValidation(userMock.test1)).toBeTruthy();
  });
  test('2.文字数1文字でfalseを返す', () => {
    expect(usernameValidation(userMock.test2)).toBeFalsy();
  });
  test('3.文字数30文字を超えるとtrueを返す', () => {
    expect(usernameValidation(userMock.test3)).toBeTruthy();
  });
  test('4.文字数30文字でfalseを返す', () => {
    expect(usernameValidation(userMock.test4)).toBeFalsy();
  });
  test('5.日本語でtrueを返す', () => {
    expect(usernameValidation(userMock.test5)).toBeTruthy();
  });
});

describe('emailValidationのテスト', () => {
  test('1.文字数が0でtrueを返す', () => {
    expect(emailValidation(emailMock.test1)).toBeTruthy();
  });
  test('2.文字数1文字でfalseを返す', () => {
    expect(emailValidation(emailMock.test2)).toBeFalsy();
  });
});

describe('passwordValidationのテスト', () => {
  test('1.文字数が5文字でtrueを返す', () => {
    expect(
      passwordValidation(passMock.test1.pass, passMock.test1.conf)
    ).toBeTruthy();
  });
  test('2.文字数が6文字でfalseを返す', () => {
    expect(
      passwordValidation(passMock.test2.pass, passMock.test2.conf)
    ).toBeFalsy();
  });
  test('3.passwordとconfirmPasswordが不一致でtrueを返す', () => {
    expect(
      passwordValidation(passMock.test3.pass, passMock.test3.conf)
    ).toBeTruthy();
  });
  test('4.passwordとconfirmPasswordが一致していればでfalseを返す', () => {
    expect(
      passwordValidation(passMock.test4.pass, passMock.test4.conf)
    ).toBeFalsy();
  });
});

export default true;
