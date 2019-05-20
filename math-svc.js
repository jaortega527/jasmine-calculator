class MathSvc {

  constructor() {

  }

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }

  add(num1, num2) {
    const min = 500;
    const max = 25000;
    this.sleep(Math.floor(Math.random() * (max - min)) + min);
    return num1 + num2;
  }

  subtract(num1, num2) {
    const min = 500;
    const max = 25000;
    this.sleep(Math.floor(Math.random() * (max - min)) + min);
    return num1 - num2;
  }

  multiply(num1, num2) {
    const min = 500;
    const max = 25000;
    this.sleep(Math.floor(Math.random() * (max - min)) + min);
    return num1 * num2;
  }

  divide(num1, num2) {
    if (num2 === 0) {
      throw new Error('Cannot Divide By Zero');
    }

    const min = 500;
    const max = 25000;
    this.sleep(Math.floor(Math.random() * (max - min)) + min);
    return num1 / num2;
  }
}