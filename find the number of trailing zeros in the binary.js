// Given a number n, find the number of trailing zeros in its binary representation.

// Examples:
// 4  ->  2, because 4 is represented as 100
// 5  ->  0, because 5 is represented as 101

// Limits:
// 0 < n <= 10^4

function trailingZeros(n) {
    let bin = n.toString(2) 
    return bin.length - bin.split('').lastIndexOf('1') - 1
  }