
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12


function makeNegative(num) {
    return num < 0 ? num : -num
  }

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".


function greet(name){
    return `Hello, ${name} how are you doing today?`
}

// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    let milliseconds = (s*1000) + (m*60000) + (h*3600000)
    return milliseconds
  }

//We need a function that can transform a string into a number. What ways of achieving this do you know?

  const stringToNumber = function(str){
    return Number(str)
  }

//Count how often sign changes in array.

  function catchSignChange(arr) {
    let change = 0
    for (let i = 0; i<arr.length; i++) {
      if (arr[i]<0 && arr[i+1]>=0) {
        change++
      } else if (arr[i]>=0 && arr[i+1]<0 ) {
        change++
      }
    }
  return change
  }

//   Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

  const reverseSeq = n => {
    let result = []
    for (let i=n; i>0; i--){
      result.push(i)
    }
    return result;
  };