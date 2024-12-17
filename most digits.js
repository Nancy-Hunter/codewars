// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
    let lengthArray= array.map(el=> el.toString().length)
    let maxIndex = lengthArray.indexOf(Math.max(...lengthArray))
    return array[maxIndex]
  }