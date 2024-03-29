// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //Solution #1
  //   let negative = false;
  //   let stringy = n.toString();
  //   if (stringy[0] == "-") {
  //     negative = true;
  //   }
  //   let reversed = stringy
  //     .split("")
  //     .reverse()
  //     .join("");
  //   if (negative) {
  //     return -Math.abs(parseInt(reversed));
  //   }
  //   return Math.abs(parseInt(reversed));
  //***************************************** */
  //Solution #2
  //   const reversed = n
  //     .toString()
  //     .split("")
  //     .reverse()
  //     .join("");

  //   if (n < 0) {
  //     return parseInt(reversed) * -1;
  //   }
  //   return parseInt(reversed);
  //********************************** */
  //Solution #3
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(reversed) * Math.sign(n);
}

reverseInt(15);
reverseInt(-15);

module.exports = reverseInt;
