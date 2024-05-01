// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
	let totalNumbers = (n*(n+1))/2
  let endNumber = (totalNumbers * 2) -1
  let startNumber = endNumber - (2 * (n-1))
  let resultArray = []
  for (let i = startNumber; i <= endNumber; i+=2 ) {
    resultArray.push(i)
  }
  return resultArray.reduce((acc, el)=> acc + el, 0)
}