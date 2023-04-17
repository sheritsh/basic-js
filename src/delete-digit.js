/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(numb) {
  let stringNumb = numb.toString();
  let checkContainer = [];

  for (let i = 0; i < stringNumb.length; i++) {
    let currentChar = "";
    currentChar += stringNumb.slice(0, i);
    currentChar += stringNumb.slice(i + 1);
    checkContainer.push(+currentChar);
  }

  return Math.max(...checkContainer);
}

module.exports = {
  deleteDigit,
};
