const isRightLength = (num) => {
  if (num.length !== 3) throw new Error('잘못된 데이터 형식입니다.');
};

test('올바른 길이의 숫자를 입력하였는가?', () => {
  expect(() => isRightLength('1234')).toThrow(Error);
});
