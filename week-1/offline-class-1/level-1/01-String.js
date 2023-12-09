// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}
getLength("Hello World");

// indexOf
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World");

// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");

// slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end)); //everythign starting from start and goes till length end, end is not included,ex-(0,5) i.e slice starts from 0 goes till 5th lentgth where 5th index not included
}
getSlice("Hello World", 0, 5); //Hello
getSlice("Hello World", 2, 5); // hello

// substring
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end)); //starts with start index and ends on end index
}
getSubstring("Hello World", 0, 5); // hello

getSubstring("Hello World", 2, 5); // hellofunction getSubstring(str, start, end) {ello
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end)); //starts with start index and ends on end index
getSubstring("Hello World", 0, 5); // hello

getSubstring("Hello World", 2, 5); // hel

// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

// split
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");

// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(" Hello World ");

// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");
