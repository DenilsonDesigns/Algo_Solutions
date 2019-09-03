// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //Solution #1
  //   return str
  //     .split("")
  //     .reverse()
  //     .join("");
  //******************** */
  //Alternate #1
  //   let reversed = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     reversed += str[i];
  //   }
  //   return reversed;
  //****************** */
  //Alternate #2
  //   let reversed = "";
  //   for (let char of str) {
  //     reversed = char + reversed;
  //   }
  //   return reversed;
  //********************* */
  // Alternate #3
  return str.split("").reduce((reversed, char) => {
    debugger;
    return char + reversed;
  }, "");
}

reverse("leppa");

module.exports = reverse;
