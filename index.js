class Calculator {
  /**
   * Sum array value
   * @param {Array} number example value [1,2,3] this 1+2+3  return 5
   */
  plus(number) {
    var p = 0;
    for (let i = 0; i < number.length; i++) {
      console.log(number[i]);
      p = p + number[i];
    }
    return p;
  }
}

module.export = Calculator;