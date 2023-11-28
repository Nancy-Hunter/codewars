// DESCRIPTION:
// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
    let unique = new Set (arr)
    let tuples = []
    console.log("This bitch is " + arr)
    unique.forEach(x=> { 
       let myTuple = {
         key: x,
         value: 0
       }
       arr.forEach(val=> {
         if (val == myTuple.key)
           myTuple.value++;
       })
       tuples.push(myTuple)            
    })
    let maxFrequency = 0;
    let returnValue = null;
    tuples.forEach(y=> {
      console.log("I found " + y.value + " times for " + y.key)
      let matched = false
      if (y.value >= maxFrequency)
        if (returnValue == null)
          matched = true
        else if (returnValue != null && returnValue.value <= y.value) {
          if (returnValue.value < y.value) {
            matched = true
          } else if (returnValue.key < y.key) {
            matched = true
          }
        }
      if (matched) {
        maxFrequency = y.value
        returnValue = y
        console.log("New leader! " + y.key + " with " + maxFrequency)
      }
    })
    console.log("Ehh? " + returnValue.key + '(' + returnValue.value + ')')
    return returnValue.key;
  }