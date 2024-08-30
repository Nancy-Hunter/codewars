// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.

// In Roman numerals:

// 1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
// 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.
// Example:

//    1 -->       "I"
// 1000 -->       "M"
// 1666 --> "MDCLXVI"

function solution(number){
    let result = ''
    while (number >= 1) {
      if(number >= 1000) {
        result += "M".repeat(Math.floor(number/1000))
        number -= Math.floor(number/1000) * 1000
      }
       if(number >= 900) {
        result += "CM"
        number -= 900
      }  
      if(number >= 500) {
        result += "D"
        number -= 500
      } 
       if(number >= 400) {
        result += "CD"
        number -= 400
      } 
      if(number >= 100) {
        result += "C".repeat(Math.floor(number/100))
        number -= Math.floor(number/100) * 100
      }
      if(number >= 90) {
        result += "XC"
        number -= 90
      } 
      if(number >= 50) {
        result += "L"
        number -= 50
      } 
       if(number >= 40) {
        result += "XL"
        number -= 40
      } 
      if(number >= 10) {
        result += "X".repeat(Math.floor(number/10))
        number -= Math.floor(number/10) * 10
      }
       if(number >= 9) {
        result += "IX"
        number -= 9
      } 
      if(number >= 5) {
        result += "V"
        number -= 5
      } 
       if(number >= 4) {
        result += "IV"
        number -= 4
      } 
      if(number / 1 >= 1) {
        result += "I".repeat(Math.floor(number/1))
        number -= number
      }  
    }
    return result
  }