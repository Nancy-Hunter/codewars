// Given the following arguments:

// n: An integer. The floor of John(1-based).
// m: An integer. The floor of the elevator(1-based).
// speeds: An array of integer. It contains four integer [a,b,c,d]
//         a: The seconds required when the elevator rises or falls 1 floor
//         b: The seconds required when the elevator open the door
//         c: The seconds required when the elevator close the door
//         d: The seconds required when John walks to n-1 floor
// Please help John to calculate the shortest time to go downstairs.

// Example
// For n = 5, m = 6 and speeds = [1,2,3,10], the output should be 12.

// John go downstairs by using the elevator:

// 1 + 2 + 3 + 4 + 2 = 12

// For n = 1, m = 6 and speeds = [1,2,3,10], the output should be 0.

// John is already at 1 floor, so the output is 0.

// For n = 5, m = 4 and speeds = [2,3,4,5], the output should be 20.

// John go downstairs by walking:

// 5 x 4 = 20

function shortestTime(n,m,speeds){
    let stairsTime = speeds[3]*(n-1)
    let elevatorFloors = Math.abs(n-m) + (n-1)
    let elevatorTime = (elevatorFloors*speeds[0]) + (speeds[1] * 2) + speeds[2]
    return stairsTime>elevatorTime? elevatorTime:stairsTime
  }