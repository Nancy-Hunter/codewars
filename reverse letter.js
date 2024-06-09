// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
    let result = str.split('').filter(el=> el.charCodeAt(0)>=65 && el.charCodeAt(0)<=90 || el.charCodeAt(0)>=97 && el.charCodeAt(0)<=122).reverse().join('')
    return result
  }