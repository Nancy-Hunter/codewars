// Given a certain integer n, n > 0and a number of partitions, k, k > 0; we want to know the partition which has the maximum or minimum product of its terms.

// The function find_spec_partition() , will receive three arguments, n, k, and a command: 'max' or 'min'

// The function should output the partition that has maximum or minimum value product (it depends on the given command) as an array with its terms in decreasing order.

// Let's see some cases (Python and Ruby)

// find_spec_partition(10, 4, 'max') == [3, 3, 2, 2]
// find_spec_partition(10, 4, 'min') == [7, 1, 1, 1]
// and Javascript:

// findSpecPartition(10, 4, 'max') == [3, 3, 2, 2]
// findSpecPartition(10, 4, 'min') == [7, 1, 1, 1]
// The partitions of 10 with 4 terms with their products are:

// (4, 3, 2, 1): 24
// (4, 2, 2, 2): 32
// (6, 2, 1, 1): 12
// (3, 3, 3, 1): 27
// (4, 4, 1, 1): 16
// (5, 2, 2, 1): 20 
// (7, 1, 1, 1): 7   <------- min. productvalue
// (3, 3, 2, 2): 36  <------- max.product value
// (5, 3, 1, 1): 15
// Enjoy it!

function findSpecPartition(n, k, com){
    if (com == 'min') {
      let result = [n-(k-1), ]
      for (let i = 1; i < k; i++){
        result.push(1)
      }
      return result
    }
    let maxResult = []
    for (let i = 0; i < k; i++) {
      maxResult.push((n-n%k)/k)
    }
    for (let i = 0; i < n%k; i++) {
      maxResult[i]++
    }
    return maxResult
}

function findSpecPartition(n, k, com){
  // min
if (com == 'min') {
  let minArr = [n - (k -1)].concat(Array(k-1).fill(1))
  return minArr
} 
//max
let leftover = n % k
let maxArr = Array(leftover).fill(Math.ceil(n/k)).concat(Array(k-leftover).fill(Math.floor(n/k)))
return maxArr
}