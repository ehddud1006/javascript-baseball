const MissionUtils = require('@woowacourse/mission-utils');
const { isValidNumbers } = require('./utils/validate.js');

const printToConsole = (message) => {
  MissionUtils.Console.print(message);
};

const readLine = (message, callback) => {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', callback);
};

class App {
  play() {
    printToConsole('숫자 야구 게임을 시작합니다.');
    readLine('숫자를 입력해주세요 : ', (answer) => {
      console.log(answer);
      try {
        if (isValidNumbers(answer)) console.log('hello');
      } catch (error) {
        console.log(error);
      }
    });
  }
}

const app = new App();
app.play();

module.exports = App;
