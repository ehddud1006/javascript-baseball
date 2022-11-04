const MissionUtils = require('@woowacourse/mission-utils');

const printToConsole = (message) => {
  MissionUtils.Console.print(message);
};

const readLine = (message, callback) => {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', callback);
};

const isRightLength = (num) => {
  return num.length === 3;
};

class App {
  play() {
    printToConsole('숫자 야구 게임을 시작합니다.');
    readLine('숫자를 입력해주세요 : ', (answer) => {
      console.log(answer);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
