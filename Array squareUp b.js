// This is a question from codingbat

// Given an integer n greater than or equal to 0, create and return an array with the following pattern:

// squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
// squareUp(2) => [0, 1, 2, 1]
// squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
// n<=1000.

function squareUp(n) {
    let result = []
    let counter = n 
    let temp = []
    while (counter>0) {
      for (let i = n; i > 0; i--) {
        if (i>counter) {
          temp.push(0)
        } else {
          temp.push(i)
        }
      }
      result.unshift(...temp)
      temp = []
      counter--
    }
  return result
}