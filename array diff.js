// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    let result = []
    for (let i = 0; i < a.length; i++){
      if (!b.includes(a[i])) {
        result.push(a[i])
      }
    }
    console.log(result)
    console.log(a, b)
    return result
  }
//ReDone a few weeks later in less than 2 minutes
  function arrayDiff(a, b) {
    return a.filter(el=> !b.includes(el))
  }

// redone a few weeks later in a couple minutes

function arrayDiff(a, b) {
  let result = []
  a.forEach(el=> {
    if (!b.includes(el)) { 
      result.push(el)
    }
  })
  return result
}