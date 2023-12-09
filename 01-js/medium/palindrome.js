/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str.length){
    /*
    /[^\w\s]/g is a regular expression that matches any character that is not a word character (\w) or a whitespace character (\s).
The first replace method replaces all non-word and non-space characters with an empty string.
The second replace method removes any remaining spaces.
    */ 
    str = str.replace(/[^\w\s]/g, '').replace(/\s/g, '');
    const reversedString = str.split('').reverse().join('');
    console.log("2222222222222",str.trim().toLowerCase(),reversedString.trim().toLowerCase())
    if(str.trim().toLowerCase() === reversedString.trim().toLowerCase()){
      return true;
    } else {
        return false;
    }
  } else {
    return true;
  }
}

console.log(isPalindrome('A man a plan a canal Panama'))

module.exports = isPalindrome;
