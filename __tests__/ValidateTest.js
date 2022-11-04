const { isWrongLength, hasDuplicatedNumbers } = require('../src/utils/validate.js');

describe('예외처리 테스트', () => {
  test('올바른 길이의 숫자를 입력하였는가?', () => {
    expect(() => isWrongLength('1234')).toThrow(Error);
  });

  test('중복없이 숫자를 입력하였는가?', () => {
    expect(() => hasDuplicatedNumbers('133')).toThrow(Error);
    expect(() => hasDuplicatedNumbers('333')).toThrow(Error);
  });
});
