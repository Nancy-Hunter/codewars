
// Based of the game counter-strike

// The bomb has been planted and you are the last CT (counter-terrorist) alive

// You need to defuse the bomb in time!

// Task:

// Given a matrix m and an integer time representing the seconds left before the bomb detonates, determine if it is possible to defuse the bomb in time. The time limit is inclusive.

// In the matrix m:

// "CT" represents the counter terrorist
// "B" represents the bomb
// "K" represents the kit
// "0" represents empty space
// The defuse kit may or may not be present in the matrix

// You can defuse the bomb in 2 ways:

// If you defuse the bomb without the defuse kit, it will cost 10 seconds
// If you defuse the bomb with the defuse kit, it will cost only 5 seconds
// each move the CT makes in any direction costs 1 second

// the CT can move diagonally, horizontally and vertically.

// Example 1

// time = 14

// m = 
// [
//   ["0", "0", "0", "0", "B"],
//   ["0", "0", "0", "0", "CT"],
//   ["0", "0", "0", "0", "0"],
//   ["0", "K", "0", "0", "0"],
// ]
// returns true

// Explanation:

// The CT moves upwards and gets to the bomb with 13 seconds left

// The CT defuses the bomb without the kit which costs 10 seconds

// The bomb is succesfully defused

// Alternative

// the CT can pickup the kit which costs 3 seconds

// Then get to the bomb which costs 3 seconds

// And defuse the bomb which costs 5 seconds

// The bomb is succesfully defused

// Example 2

// time = 10

// m = 
// [
//   ["CT", "0", "0", "0", "0", "0", "0"],
//   [ "0", "0", "0", "0", "0", "0", "0"],
//   [ "0", "0", "0", "0", "0", "0", "0"],
//   [ "0", "0", "0", "0", "0", "0", "0"],
//   [ "0", "0", "0", "0", "0", "0", "0"],
//   [ "0", "0", "0", "0", "0", "0", "0"],
//   [ "0", "0", "0", "0", "0", "0", "0"],
//   [ "0", "0", "0", "0", "0", "0", "B"]
// ]
// returns false

// Explanation:

// There is no kit present so the CT has to defuse without it

// the CT takes 7 seconds to get to the bomb but there is only 10 seconds remaining

// the bomb detonates!

// Good luck!

// Bingo bango bongo bish bash bosh.


//DOESNT WORK

function bombHasBeenPlanted(map, time) {
    console.log('New Matrixxxxxxxxx')
    console.log(map)
    console.log(`time : ${time}`)
    let ctYAxis, ctXAxis, bombXAxis, bombYAxis, kitXAxis, kitYAxis
    map.forEach((x, index) => {
      if (x.includes('CT')) {
        ctXAxis = index
        ctYAxis = x.indexOf('CT') 
      }
      if (x.includes('B')) {
        bombXAxis = index 
        bombYAxis = x.indexOf('B') 
      } 
      if (x.includes('K')) {
        kitXAxis = index 
        kitYAxis = x.indexOf('K') 
      }
    })
    console.log(`CT Position: ${ctXAxis}, ${ctYAxis} 
    bomb Position: ${bombXAxis}, ${bombYAxis}
    kit Position: ${kitXAxis}, ${kitYAxis}`)
    let ctToBomb, ctToKit, kitToBomb
    ctToBomb = Math.floor(Math.sqrt( (bombXAxis - ctXAxis)**2 + (bombYAxis-ctYAxis)**2 ) )
    ctToKit = Math.floor(Math.sqrt( (kitXAxis - ctXAxis)**2 + (kitYAxis-ctYAxis)**2 ) )
    kitToBomb = Math.floor(Math.sqrt( (bombXAxis - kitXAxis)**2 + (bombYAxis-kitYAxis)**2 ) )
    
    console.log(`distance CT to Bomb: ${ctToBomb},
    distance ct to Kit and kit to bomb: ${ctToKit}  ${kitToBomb}`) 
    if (ctToBomb + 10 <= time || (ctToKit + kitToBomb + 5) <= time) {
      return true
    }
    return false
}