// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str){
//   const arr = [];
//   let newString= "";
//   for (let i = str.length - 1; i >=0; i--) {
//     arr.push(str[i]);
//   }
//   for(let j=0; j<arr.length; j++){
//     newString += arr[j];
//   }
//   return newString;
// }

function reverse(str){
  const arr = str.split("");
  return arr.reverse().join("");

  //return str.split("").reverse().join("");
}

module.exports = reverse;
