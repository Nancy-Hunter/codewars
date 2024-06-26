// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    console.log(num)
    let numArr = num.toString().split('')
    let length = numArr.length
    let result = []
    for (let i = length-1; i>=0; i--){
      if (numArr[i] != 0) {
        console.log(numArr[i])
        result.unshift( ' + ' + numArr.slice(i).join(''))
        numArr[i] = 0
      }
    }
    result[0] = result[0].slice(3)
    return result.join('')
  }