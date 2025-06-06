// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// =
// 9
// 1 
// 2
//  +2 
// 2
//  +2 
// 2
//  =9.

function squareSum(numbers){
    return numbers.reduce((acc, el)=> acc + el*el, 0)
   }

// did it better a few weeks ago

function squareSum(numbers){
    return numbers.map(el=> el * el).reduce((acc, el)=> acc + el, 0)
  }