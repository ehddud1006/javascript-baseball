const MissionUtils = require('@woowacourse/mission-utils');
const { isValidNumbers } = require('./utils/validate.js');

const printToConsole = (message) => {
  MissionUtils.Console.print(message);
};

const readLine = (message, callback) => {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', callback);
};

const generateRandomNumberArray = () => {
  const randomNumberArray = [];
  while (randomNumberArray.length < 3) {
    const digit = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!randomNumberArray.includes(digit)) {
      randomNumberArray.push(digit);
    }
  }
  return randomNumberArray;
};

const strikeJudgment = (randomNumberList, userInputNumber) => {
  let strikeCount = 0;
  const notStrikeIndexList = [];
  randomNumberList.forEach((randomNumber, index) => {
    if (randomNumber === userInputNumber[index]) {
      strikeCount += 1;
    } else {
      notStrikeIndexList.push(index);
    }
  });

  return [strikeCount, notStrikeIndexList];
};

const ballJudment = (notStrikeIndexList, randomNumberList, userInputNumber) => {
  let ballCount = 0;
  notStrikeIndexList.forEach((notStrikeIndex) => {
    if (randomNumberList.includes(userInputNumber[notStrikeIndex])) {
      ballCount += 1;
    }
  });
  return ballCount;
};
const strikeBallJudgment = (randomNumberList, userInputNumber) => {
  const [strikeCount, notStrikeIndexList] = strikeJudgment(randomNumberList, userInputNumber);
  const ballCount = ballJudment(notStrikeIndexList, randomNumberList, userInputNumber);
  return [strikeCount, ballCount];
};

const matching = (computerInputNumbers, userInputNumbers) => {
  const [strikeCount, ballCount] = strikeBallJudgment(computerInputNumbers, userInputNumbers);
  if (strikeCount === 3) {
    return '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
  }
  return `strikeCount: ${strikeCount} ballCount: ${ballCount}`;
};

const test2 = () => {
  console.log('hi');
  readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (answer) => {
    if (answer === 1) {
      const randomNumberArray = generateRandomNumberArray();
      // test(randomNumberArray);
    } else {
      MissionUtils.Console.close();
    }
  });
};

const test = (randomNumberArray) => {
  readLine('숫자를 입력해주세요 : ', (answer) => {
    try {
      if (isValidNumbers(answer)) {
        const userInputNumberArray = answer.split('').map((v) => Number(v));
        const result = matching(randomNumberArray, userInputNumberArray);
        return result;
      }
    } catch (error) {
      console.log(error);
    }
  });
};

class App {
  play() {
    printToConsole('숫자 야구 게임을 시작합니다.');
    const randomNumberArray = generateRandomNumberArray();
    console.log(randomNumberArray);

    const result = test(randomNumberArray);
    console.log('dad', result);
    if (result === '3개의 숫자를 모두 맞히셨습니다! 게임 종료') {
      // console.log('gg');
      test2();
    } else {
      test(randomNumberArray);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
