// Your function takes in parameter an array of integers nums and a strictly-positive integer k.

// Imagine a sliding window of size k which is moving from left to right in the array. You can only see the k elements that are in the window. The sliding window moves right by one position until it is no longer possible to have k elements in the window. You have to return an array of the maximums for each successive window, from left to right.

// Detailed Example:
// Given nums = [1,3,-1,-3,5,3,6,7], and k = 3:

// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7      3
// 1 [3  -1  -3] 5  3  6  7       3
// 1  3 [-1  -3  5] 3  6  7       5
// 1  3  -1 [-3  5  3] 6  7       5
// 1  3  -1  -3 [5  3  6] 7       6
// 1  3  -1  -3  5 [3  6  7]      7

// (nums = [1,3,-1,-3,5,3,6,7], k = 3) ---> [3, 3, 5, 5, 6, 7]

function sliding(nums, k) {
    console.log(nums.length)
    let moves = nums.length % k == 0? nums.length - (k-1) : nums.length - (nums.length % k)
    console.log(moves)
    let result = []
    let testArr = []
    for (let i = 0; i < moves; i++) {
      for (let j = 0; j < k; j++) {
        testArr.push(nums[i+j])
      }
      result.push(Math.max(...testArr))
      testArr =[]
    }
    return result
  }

  //doesnt work :(