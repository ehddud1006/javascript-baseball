const { isValidNumbers } = require('../src/utils/validate.js');

describe('예외처리 테스트', () => {
  test('정해진 숫자길이를 초과하면 예외발생', () => {
    expect(() => isValidNumbers('1234')).toThrow(Error);
  });

  test('중복있는 숫자를 입력하면 예외발생', () => {
    expect(() => isValidNumbers('133')).toThrow(Error);
    expect(() => isValidNumbers('333')).toThrow(Error);
  });

  test('0이 포함되어 있으면 예외발생', () => {
    expect(() => isValidNumbers('102')).toThrow(Error);
  });

  test('숫자가 아닌 문자가 포함되어있으면 예외발생', () => {
    expect(() => isValidNumbers('가12')).toThrow(Error);
    expect(() => isValidNumbers('😊')).toThrow(Error);
    expect(() => isValidNumbers('ﾶ')).toThrow(Error);
  });
});
