/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();//This is a regular expression pattern. \s represents any whitespace character (such as space, tab, or newline), and the g flag indicates a global search, meaning it will replace all occurrences in the string, not just the first one.
const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();
if(cleanStr1.length !== cleanStr2.length){
  return false;
}
/*
.split(''): This method splits the string into an array of characters. The empty string passed as an argument means that each individual character becomes a separate element in the array.

.sort(): This method sorts the elements of the array in lexicographic order (alphabetical order for strings).

.join(''): This method joins the elements of the array back into a single string. The empty string passed as an argument means that the elements are concatenated without any separator. 
*/
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');
  return sortedStr1 === sortedStr2
}

console.log(isAnagram('openai', 'open'));

module.exports = isAnagram;
