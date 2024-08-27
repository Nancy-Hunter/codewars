// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

//DOESNT WORK

function nextBigger(n){
    console.log('the problem number is', n)
    let numArr = n.toString().slice(0).split('').map(el=>+el)
    let counter = n+1
    console.log(counter.toString().slice(0).split('').length==numArr.length, "entered the loop")
    while ( counter.toString().slice(0).split('').length==numArr.length) {
      let counterArr = counter.toString().slice(0).split('').map(el=>+el)
      let numArrMutated = numArr.slice(0)
      let compare = []
      counterArr.forEach(el=>{
        numArrMutated.splice(numArr.indexOf(el)-1, 1) 
        compare.push(el)
        })
      console.log(counterArr, numArrMutated, compare)
      if (numArr.every((element) => compare.includes(element))) return counter
      counter++  
      
    }
    return -1
  //   let counter = 2
  //   while (n>= +numArr.join('') && counter != numArr.length+1) {
  //     numArr = numArr.slice(0, -counter).concat(numArr.slice(-counter).sort((a,b)=> b-a))
  //     counter++
  //     console.log('n equals', n, +numArr.join(''))
  //   }
  //   return +numArr.join('') == n ? -1 : +numArr.join('')
  }