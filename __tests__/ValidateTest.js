const { isWrongLength } = require('../src/utils/validate.js');

test('올바른 길이의 숫자를 입력하였는가?', () => {
  expect(() => isWrongLength('1234')).toThrow(Error);
});
