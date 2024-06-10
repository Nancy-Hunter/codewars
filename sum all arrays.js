// You are given an array of values.

// Sum every number value in the array, and any nested arrays (to any depth).

// Ignore all other types of values.

function arraySum(arr) {
    arr = arr.flat(Infinity)
    arr = arr.filter(el => typeof el == 'number')
    return arr.reduce((acc, el)=> acc + el, 0)
  }