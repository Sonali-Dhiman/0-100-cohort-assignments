/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    if(str.length){
      const regex = /[aeiouAEIOU]/g;
      
      const matches = str.match(regex);

      return matches ? matches.length : 0;
    }
    else {
      return 0;
    }
}
console.log(countVowels('hello'));
console.log(countVowels('programming'));
console.log(countVowels('OpenAI'));
module.exports = countVowels;