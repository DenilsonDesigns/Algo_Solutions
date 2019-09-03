// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let objectStr = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    objectStr[char] = objectStr[char] + 1 || 1;
  }

  for (let key in objectStr) {
    if (objectStr[key] > max) {
      max = objectStr[key];
      maxChar = key;
    }
  }

  return maxChar;
}

maxChar("abcccccccd"); // "c"

module.exports = maxChar;
