// Write a code that receives an array of numbers or strings, goes one by one through it while taking one value out, leaving one value in, taking, leaving, and back again to the beginning until all values are out.
// It's like a circle of people who decide that every second person will leave it, until the last person is there. So if the last element of the array is taken, the first element that's still there, will stay.
// The code returns a new re-arranged array with the taken values by their order. The first value of the initial array is always taken.

// Examples:

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// -> [1, 3, 5, 7, 9, 2, 6, 10, 8, 4]

// arr = ['this', 'code', 'is', 'right', 'the']
// -> ['this', 'is', 'the', 'right', 'code']

//DOESNT WORK
// function yesNo(arr, result=[], first=true){
//     console.log(arr, result, first, ' start of function')
//     if (arr.length != 0 && first) {
//       let temp = arr.filter((el, index)=> index % 2 != 0)
//       result.push(...arr.filter((el, index)=> index % 2 == 0))
//       first = result[result.length-1] != arr[arr.length-1] //if last element added is last in arr dont start on first
    
//       yesNo(temp, result, first)
//     } else if (arr.length != 0) {
//         let temp = arr.filter((el, index)=> index % 2 == 0)
//         result.push(...arr.filter((el, index)=> index % 2 != 0))
//         first = result[result.length-1] == arr[arr.length-1]
        
//         yesNo(temp, result, first)
//       }
     
    
//     return result
//   }