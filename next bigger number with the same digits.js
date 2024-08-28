// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

//BRUTE FORCE SOLUTION WORKS BUT IS TOO SLOW TO PASS

// function nextBigger(n){
//     let numArr = n.toString().slice(0).split('').map(el=>+el)
//     let counter = n+1
//     while ( counter.toString().slice(0).split('').length==numArr.length) { // checks that the counter isnt more digits than the num
//       let counterArr = counter.toString().slice(0).split('').map(el=>+el) //transforms counter to array
//       let numArrMutated = numArr.slice(0) // copies num arr so it isnt mutated
//       let compare = []
//       counterArr.forEach(el=>{  //pop off numArr by digit
//         if (numArrMutated.includes(el)){
//           numArrMutated.splice(numArrMutated.indexOf(el), 1) 
//           compare.push(el)
//         }  
//         })
//       if (numArrMutated.length == 0) return counter
//       counter++  
//     }
//     return -1

 //DOESNT WORK 
 

//  function nextBigger(n){
//     let numArr = n.toString().slice(0).split('').map(el=>+el) // map n to array
//     let largestNum = numArr.slice(0).sort((a, b)=> b - a) // largest possible num
//     if (largestNum.join('')== n) return -1 // eliminate if no bigger number possible
//     let counter = 2
//     while (n>= +numArr.join('') && counter != numArr.length+1) {
//       if(numArr[numArr.length-counter] == numArr[numArr.length-counter+1]) {
       
//         const temp = numArr[numArr.length-counter];
//         numArr[numArr.length-counter] = numArr[numArr.length-counter-1];
//         numArr[numArr.length-counter-1] = temp;
//          console.log('n equals', n, 'tested number equals '+numArr.join(''), 'on count ', counter-2, 'same digit')
//         if(n<= +numArr.join('')) return +numArr.join('')
//       }
//       if(numArr[numArr.length-counter+1]==0) {
//         const temp = numArr[numArr.length-counter+1];
//         numArr[numArr.length-counter+1] = numArr[numArr.length-counter];
//         numArr[numArr.length-counter] = temp;
//          console.log('n equals', n, 'tested number equals '+numArr.join(''), 'on count ', counter-2, 'zer0')
//         if(n<= +numArr.join('')) return +numArr.join('')
//       }
//       numArr = numArr.slice(0, -counter).concat(numArr.slice(-counter).sort((a,b)=> b-a))
//       counter++
//       console.log('n equals', n, 'tested number equals '+numArr.join(''), 'on count ', counter-2)
//     }
//     return +numArr.join('') 
//   }

//SOLUTION, I HAD TO CHEAT. I COULDNT DO IT :(

const sortedDigits = n => { let arr = n.toString().split(''); arr.sort((a, b) => b - a); return arr; };

function nextBigger(n){
  
  let arr = sortedDigits(n);
  let max = parseInt(arr.join(''), 10);
  
  for(var i = n + 1; i <= max; i++){
    if(sortedDigits(i).every((x, j) => x === arr[j])){
      return i;
    }
  }
  
  return -1;
}