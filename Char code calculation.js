// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6


function calc(x){
    console.log("x is:" + x)
    let xArray = x.split('').map(x=>x.charCodeAt()).join('')
    console.log("xArray is:" + xArray)
    let total2 = xArray.split('').map(x=> x == 7? 1 : x).reduce((acc, current)=> Number(acc) + Number(current), 0)
    console.log("total2 is:" + total2)
    let total1 = xArray.split('').reduce((acc, current)=> Number(acc) + Number(current), 0)
    console.log("total1 is:" + total1)
    return Number(total1-total2)
  }