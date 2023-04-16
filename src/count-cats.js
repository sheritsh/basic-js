const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const inputArr = [...matrix];
  let catsCounter = 0;

  for (let i = 0; i < inputArr.length; i++) {
    for (let j = 0; j < inputArr[i].length; j++) {
      if (inputArr[i][j] == "^^") {
        catsCounter++;
      }
    }
  }

  return catsCounter;
}

module.exports = {
  countCats,
};
