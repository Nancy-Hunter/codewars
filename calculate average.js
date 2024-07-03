// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    return array.reduce((acc, el)=> acc + el, 0)/array.length || 0
  }