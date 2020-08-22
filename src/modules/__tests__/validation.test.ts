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
    addErrorMessage: () => undefined,
  },
  // 文字数1文字でfalseを返す
  test2: {
    value: 'a',
    addErrorMessage: () => undefined,
  },
  // 文字数30文字を超えるとtrueを返す
  test3: {
    value: '1234567890123456789012345678901',
    addErrorMessage: () => undefined,
  },
  // 文字数30文字でfalseを返す
  test4: {
    value: '123456789012345678901234567890',
    addErrorMessage: () => undefined,
  },
  // 不正な文字でtrueを返す
  test5: {
    value: '`@\'"/|?!&%$#(){}*~^.,<>',
    addErrorMessage: () => undefined,
  },
  // 日本語でfalseを返す
  test6: {
    value: 'こんにちは',
    addErrorMessage: () => undefined,
  },
};

const emailMock = {
  // 文字数が0文字でtrueを返す
  test1: {
    value: '',
    addErrorMessage: () => undefined,
  },
  // 文字数1文字でfalseを返す
  test2: {
    value: 'a',
    addErrorMessage: () => undefined,
  },
};

const passMock = {
  // 文字数が5文字でtrueを返す
  test1: {
    pass: {
      value: '12345',
      addErrorMessage: () => undefined,
    },
    conf: {
      value: '12345',
      addErrorMessage: () => undefined,
    },
  },
  // 文字数が6文字でfalseを返す
  test2: {
    pass: {
      value: '123456',
      addErrorMessage: () => undefined,
    },
    conf: {
      value: '123456',
      addErrorMessage: () => undefined,
    },
  },
  // passwordとconfirmPasswordが不一致でtrueを返す
  test3: {
    pass: {
      value: '12345678',
      addErrorMessage: () => undefined,
    },
    conf: {
      value: '123456789',
      addErrorMessage: () => undefined,
    },
  },
  // passwordとconfirmPasswordが一致していればでfalseを返す
  test4: {
    pass: {
      value: '123456789',
      addErrorMessage: () => undefined,
    },
    conf: {
      value: '123456789',
      addErrorMessage: () => undefined,
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
  test('5.不正な記号でtrueを返す', () => {
    expect(usernameValidation(userMock.test5)).toBeTruthy();
  });
  test('6.日本語でfalseを返す', () => {
    expect(usernameValidation(userMock.test6)).toBeFalsy();
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
