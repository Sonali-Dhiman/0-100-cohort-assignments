/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(){
    this.result = 0;
  }

  clear(number){
    this.result = 0;
  }

  add(number){
    this.result = this.result + number;
  }

  subtract(number){
    this. result = this.result - number;
  }

  multiply(number){
    this.result = this.result * number;
  }

  divide(number){
    if (number === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result = this.result / number;
  }

  getResult() {
    return this.result;
  }
  calculate(expression){
     // Remove multiple continuous spaces
     const cleanedExpression = expression.replace(/\s+/g, ' ').trim();

     //check fr invalidd non-numerical characters
     if(!/^[0-9+\-*/(). ]+$/.test(cleanedExpression)){
        throw new Error("Invalid expression")
     }

//      /: The first and last slashes denote the beginning and end of the regular expression.

// ^: Asserts the start of the string.

// [0-9+\-*/(). ]+: This part is a character class that matches one or more characters. Let's break it down further:

// 0-9: Matches any digit from 0 to 9.
// +: Matches the plus symbol.
// \-: Matches the minus symbol. The backslash \ is an escape character to treat - literally in the character class.
// *: Matches the asterisk symbol.
// /: Matches the forward slash.
// (): Matches open and close parentheses.
// .: Matches the dot/period.
// : Matches a space.
// So, [0-9+\-*/(). ]+ allows for one or more occurrences of digits, plus, minus, asterisk, forward slash, parentheses, dot, or space.

// $: Asserts the end of the string.

// Putting it all together, the regular expression /^[0-9+\-*/(). ]+$/ ensures that the entire string consists of one or more valid arithmetic expression characters and nothing else. This is used to validate if the input expression in the calculate method of the Calculator class contains only valid characters for arithmetic expressions. If the input contains any other characters, the regular expression test will fail.







      // Check for division by zero
      if (/\/\s*0/.test(cleanedExpression)) {
        throw new Error("Cannot divide by zero");
      }
      /*
      Putting it all together:

      /: Start of the pattern.
      \/: Match the forward slash /.
      \s*: Match zero or more whitespace characters.
      0: Match the digit zero.
      /: End of the pattern. 
      */
     try {
      this.result = eval(cleanedExpression);
     } catch(error) {
        throw new Error("Invalid expression")
     }
  }
}

module.exports = Calculator;
