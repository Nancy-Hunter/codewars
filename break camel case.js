// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let result = string.split("")
  for (let i = 0; i < result.length; i++) {
    if (result[i] == result[i].toUpperCase()) {
      result.splice(i, 0, " ")
      i++
    }
  } 
    return result.join("")
  }