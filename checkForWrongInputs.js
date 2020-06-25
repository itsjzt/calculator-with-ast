module.exports = function checkForWrongInputs(parsedSource) {
  let index = 0;
  while (index++ < parsedSource.length) {
    let currentLex = parsedSource[index];
    // 1. check if every digit is followed by a symbol and vice versa
    let nextLex = parsedSource[index + 1];
    if (nextLex) {
      if (currentLex.type === "DIGIT" && nextLex.type === "DIGIT")
        throw new Error(
          "IllegalArgument: a number is followed by another number"
        );
      if (currentLex.type === "SYMBOL" && nextLex.type === "SYMBOL")
        throw new Error(
          "IllegalArgument: a symbol is followed by another symbol"
        );
    }

    // 2. check if the first digit isn't starting with * or /
    // +1 * 2 or -1 /2 is valid but *1 / 9 or /3 + 9 isn't
  }

  return parsedSource;
};
