const { isWrongLength, hasDuplicatedNumbers, hasZero, isNotNumeric } = require('../src/utils/validate.js');

describe('예외처리 테스트', () => {
  test('정해진 숫자길이를 초과하면 예외발생', () => {
    expect(() => isWrongLength('1234')).toThrow(Error);
  });

  test('중복있는 숫자를 입력하면 예외발생', () => {
    expect(() => hasDuplicatedNumbers('133')).toThrow(Error);
    expect(() => hasDuplicatedNumbers('333')).toThrow(Error);
  });

  test('0이 포함되어 있으면 예외발생', () => {
    expect(() => hasZero('102')).toThrow(Error);
  });

  test('숫자가 아닌 문자가 포함되어있으면 예외발생', () => {
    expect(() => isNotNumeric('가12')).toThrow(Error);
    expect(() => isNotNumeric('😊')).toThrow(Error);
    expect(() => isNotNumeric('ﾶ')).toThrow(Error);
  });
});
