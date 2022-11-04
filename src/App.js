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

class App {
  play() {
    printToConsole('숫자 야구 게임을 시작합니다.');
    const randomNumberArray = generateRandomNumberArray();
    readLine('숫자를 입력해주세요 : ', (answer) => {
      console.log(answer);
      try {
        if (isValidNumbers(answer)) {
          const userInputNumber = answer.split('').map((v) => Number(v));
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
}

const app = new App();
app.play();

module.exports = App;
