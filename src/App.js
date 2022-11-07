const { Console, Random } = require('@woowacourse/mission-utils');
const { isValidNumbers } = require('./utils/validate.js');
const Game = require('./Game.js');

const printToConsole = (message) => {
  Console.print(message);
};

const readLine = (message, callback) => {
  Console.readLine(message, callback);
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
  // console.log('hi');
  // readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (answer) => {
  //   if (answer === 1) {
  //     const randomNumberArray = generateRandomNumberArray();
  //     // test(randomNumberArray);
  //   } else {
  //     MissionUtils.Console.close();
  //   }
  // });
};

const test = (randomNumberArray) => {
  Console.print(randomNumberArray);
  let result = '';
  readLine('숫자를 입력해주세요 : ', (answer) => {
    try {
      if (isValidNumbers(answer)) {
        const userInputNumberArray = answer.split('').map((v) => Number(v));
        result = matching(randomNumberArray, userInputNumberArray);

        if (result === '3개의 숫자를 모두 맞히셨습니다! 게임 종료') {
          Console.print(result);
          readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (answer) => {
            if (answer === '1') {
              const newRandomNumberArray = generateRandomNumberArray();
              test(newRandomNumberArray);
            } else {
              Console.close();
            }
          });
        } else {
          test(randomNumberArray);
        }
      }
    } catch (error) {
      console.log(error);
    }
  });
  return result;
};

class App {
  play() {
    printToConsole('숫자 야구 게임을 시작합니다.');
    game = new Game();

    test(randomNumberArray);
  }
}

const app = new App();
app.play();

module.exports = App;
