// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {
    arr = arr.sort((a, b)=> a-b)
    let result = 0
    for (let i = arr.length-1; i > 0; i--) {
      result += arr[i]-(arr[i-1])
    }
    return result
  }