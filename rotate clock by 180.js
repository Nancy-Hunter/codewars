// Task
// You are given a digital number written down on a sheet of paper.

// Your task is to figure out if you rotate the given sheet of paper by 180 degrees would the number still look exactly the same.

// Note: You can assume that the digital number is written like the following image:


// Example
// For number = "1", the result should be false

// For number = "29562", the result should be true.

// For number = "77", the result should be false.

// Input/Output
// [input] string number
// sequence of digital digits given as a string.

// [output] a boolean value
// true if you rotate the given sheet of paper by 180 degrees then the number still look exactly the same. false otherwise.


function rotatePaper(number) {
    //same up and down 2, 5, 8, 0
    //same if opposite 6 an 9
    //always false (1, 3, 4, 7)
    let nonMirrorable = ['1', '3', '4', '7']
    let arr = number.split('')
    let reversedString = []
    for (let i=arr.length-1; i>=0; i--) {
      if (arr[i] == '6'){
        reversedString.push('9')
      } else if (arr[i] == '9') {
         reversedString.push('6')
      } else {
         reversedString.push(arr[i])
      }
    }
    for (let i= 0; i<nonMirrorable.length; i++) {
       if (arr.includes(nonMirrorable[i])) {
        console.log(nonMirrorable[i])
        return false
      }
    }
   for (let i = 0; i<arr.length; i++) {
     if (arr[i]!=reversedString[i]){
       return false
     }
   }
    console.log( reversedString,  arr)
    return true
    }

    //the lead codewars answer is so sleek

    function rotatePaper(s){
        const glyph = {2:2, 5:5, 6:9, 8:8, 9:6, 0:0};
        return Array.from(s).map(e => glyph[e]).reverse().join('') === s;
    }