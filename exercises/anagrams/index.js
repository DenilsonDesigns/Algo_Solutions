// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  //Solution #1
  // const sort1 = stringA
  //   .split("")
  //   .sort()
  //   .join("");
  // const sort2 = stringB
  //   .split("")
  //   .sort()
  //   .join("");
  // return sort1 === sort2;
  //*****This works but should it? Doesn't check case or remove punctuation */
  //Solution #2
  //   const aCharMap = buildCharMap(stringA);
  //   const bCharMap = buildCharMap(stringB);
  //   if (Object.keys(aCharMap).length != Object.keys(bCharMap).length) {
  //     return false;
  //   }
  //   for (let char in aCharMap) {
  //     if (aCharMap[char] !== bCharMap[char]) {
  //       return false;
  //     }
  //   }
  //   return true;
  //*********************** */
  //Solution #3
  return cleanString(stringA) === cleanString(stringB);
}

function buildCharMap(str) {
  const charMap = {};
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

anagrams("rail safety", "fairy tales"); // --> True
anagrams("RAIL! SAFETY!", "fairy tales"); // --> True
module.exports = anagrams;
