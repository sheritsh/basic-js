/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repTimes = options.repeatTimes || 0;
  let sep = options.separator || "+";
  let add = options.addition;
  let addRepTimes = options.additionRepeatTimes || 0;
  let addSep = options.additionSeparator || "|";

  if (add === undefined) {
    add = "";
  } else if (typeof add != "string") {
    add = String(add);
  }

  let addRes = [];
  if (addRepTimes) {
    for (let i = 0; i < addRepTimes; i++) {
      addRes.push(add);
    }
    add = addRes.join(addSep);
  }

  let strRes = [];
  if (repTimes) {
    for (let i = 0; i < repTimes; i++) {
      strRes.push(str + add);
    }
    str = strRes.join(sep);
  } else {
    str += add;
  }

  return str;
}

module.exports = {
  repeater,
};
