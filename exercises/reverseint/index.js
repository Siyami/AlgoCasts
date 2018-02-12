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
  const revArr = [];
  const arr = n.toString().split('');
  for(let i = arr.length - 1; i >= 0; i--){
    revArr.push(arr[i]);
  }
  if(n < 0){
    return parseInt(revArr.join('')) * -1;
  }
  return parseInt(revArr.join(''));
}

module.exports = reverseInt;
