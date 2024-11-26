// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x){
    let stringInts = x.filter(el=> typeof el == 'string')
    let ints = x.filter(el=> typeof el == 'number')
    return ints.reduce((acc, el)=> acc + el, 0)-stringInts.reduce((acc, el)=> acc + +el, 0)
  }