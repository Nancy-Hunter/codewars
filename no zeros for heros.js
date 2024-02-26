// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
    let arr = n.toString().split('')
    let lastNum = arr.length
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != 0) {
        lastNum = i
      }
    }
    return Number(arr.slice(0, lastNum+1).join(''))
  }