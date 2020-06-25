const DIGIT_REGEX = /[0-9]/;
const SYMBOL_REGEX = /\*|\+|\-|\//;

module.exports = function lexInput(source) {
  let index = 0;
  let sourceArray = source.split("").filter((char) => char !== " ");
  let lexedInput = [];

  while (index < sourceArray.length) {
    let char = sourceArray[index];
    if (char.match(SYMBOL_REGEX)) {
      lexedInput.push({
        type: "SYMBOL",
        value: char,
      });
      index++;
      continue;
    }

    if (char.match(DIGIT_REGEX)) {
      let i = index;
      // concating number is easy in string
      let digitBuffer = "";
      // find how long is the number
      while (i < sourceArray.length && sourceArray[i].match(DIGIT_REGEX)) {
        digitBuffer += sourceArray[i];
        i++;
      }

      lexedInput.push({
        type: "DIGIT",
        value: Number(digitBuffer),
      });
      // skip till i
      index = i;
      continue;
    }

    // skip if the digit is useless
    index++;
  }

  return lexedInput;
};
