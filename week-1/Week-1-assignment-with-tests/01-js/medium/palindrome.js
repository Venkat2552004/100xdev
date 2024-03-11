/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var regex = [" ",',','?','!','.'];
  for(var i = 0; i < regex.length; i++)
    str = str.split(regex[i]).join("").toLowerCase();
  s = ""
  for(var i = str.length - 1; i >= 0; i--)
    s = s + str[i];
  if(s === str) return true;
  return false;
}

module.exports = isPalindrome;

// console.log(isPalindrome('Eva, can I see bees in a cave?'));

