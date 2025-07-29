// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// If the array is invalid (empty, or contains negative integers or integers with more than 1 digit), return nil (or your language's equivalent).

// Examples
// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6] (4325 + 1 = 4326)
// [1, 2, 3, 9] would return [1, 2, 4, 0] (1239 + 1 = 1240)
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0] (9999 + 1 = 10000)
// [0, 1, 3, 7] would return [0, 1, 3, 8] (0137 + 1 = 0138)
// Invalid arrays

// [] is invalid because it is empty
// [1, -9] is invalid because -9 is not a non-negative integer
// [1, 2, 33] is invalid because 33 is not a single-digit integer

function upArray(arr){
  if (arr.length == 0) return null
  let string = []
  let added = false
  let lastNine = arr.length-1
  for (let i = arr.length-1; i >= 0; i--) {
    if (arr[i] > 9) return null
    if (arr[i] < 0) return null
    if (arr[i] == 9 && i == lastNine) {
      if (i == 0) {
        string.unshift(0)
        string.unshift(1)
        return string
        } else {
          string.unshift(0)
          lastNine--
          continue;
        }
    } 
    if (added == false) {
      string.unshift(arr[i]+1)
      string.unshift(...arr.slice(0, i))
      added = true
    }
  }
  return string
}