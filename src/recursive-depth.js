/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let res = 1;

    if (Array.isArray(arr)) {
      let countMax = 0;
      arr.forEach((item) => {
        let depthCounter = this.calculateDepth(item);
        if (depthCounter > countMax) {
          countMax = depthCounter;
        }
      });
      res += countMax;
    } else {
      return 0;
    }

    return res;
  }
}

module.exports = {
  DepthCalculator,
};
