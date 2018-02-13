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
  stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
  stringB = stringB.replace(/[^\w]/g, "").toLowerCase();
  const objA = {};
  const objB = {};

  if(stringA.length !== stringB.length){
    return false;
  }

  for(char of stringA){
    if(objA[char]){
      objA[char]++;
    }
    else{
      objA[char] = 1;
    }
  }

  for(char of stringB){
    if(objB[char]){
      objB[char]++;
    }
    else{
      objB[char] = 1;
    }
  }

  for(k in objA){
    if(objA[k] !== objB[k]){
      return false;
    }
  }
  return true;

}

module.exports = anagrams;
