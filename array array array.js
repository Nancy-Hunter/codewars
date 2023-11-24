// You are given an initial 2-value array (x). You will use this to calculate a score.

// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

// For example:

// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

//Parameters response example psuedo code
//x is an array
//x contains two values
//x might not be a number
//returns an array in an array the number of times of the score

function explode(x){
    let score = 0
    let result = []
    x.forEach(current => {
      if(typeof current == 'number') {
        score++
        for (let i = 0; i< current; i++) {
           result.push(x)
        }  
      }
    })
    return score == 0? "Void!": result
   }