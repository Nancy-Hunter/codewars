// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.

// The order is: uppercase letters, lowercase letters, numbers and special characters.

// "*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]
// More examples in the test cases.

// Good luck!

function solve(s){
    let upperCase = 0
    let lowerCase = 0
    let numbers = 0
    let other = 0
    for (let i = 0; i < s.length; i++) {
      if (s.charCodeAt(i)<=90 && s.charCodeAt(i)>=65) {
        upperCase++
      } else if (s.charCodeAt(i)<=122 && s.charCodeAt(i)>=97) {
        lowerCase++
      } else if (s.charCodeAt(i)<=57 && s.charCodeAt(i)>=48) {
        numbers++
      } else {
        other++
      }
    }
    return [upperCase, lowerCase, numbers, other]
}