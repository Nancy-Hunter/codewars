// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)


//first solution returns one single digit number
function persistence(num) {
    let result = num.toString().split("")
    while (result.length>1) {
      result = result.reduce((acc, current)=> acc * current, 1).toString().split("")
    }
    console.log(num, Number(result.join('')))
    return Number(result.join(''))
  }

//second function actually completes kata and returns number of times while looped needed to run to get to a single digit
  function persistence(num) {
    let result = num.toString().split("")
    let counter = 0
    while (result.length>1) {
      result = result.reduce((acc, current)=> acc * current, 1).toString().split("")
      counter++
    }
    console.log(num, Number(result.join('')))
    return counter
  }