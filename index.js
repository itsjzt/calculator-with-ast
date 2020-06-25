const lexInput = require("./lexInput");
const checkForWrongInputs = require("./checkForWrongInputs");
// ex: 1 + 2 * 4 / 10 - 4
// in second iteration, ex: 1 + (2 * 10) / 10

function main(source = "") {
  return checkForWrongInputs(lexInput(source));
}

console.log(main("10 - 9 * 2193 + 7643 / 6"));
// console.log(main("10 *- 9 * 2193 + 7643 / 6"));
console.log(main("10 10 - 9 * 2193 + 7643 / 6"));
