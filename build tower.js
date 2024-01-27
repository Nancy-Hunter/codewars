// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


function towerBuilder(nFloors) {
    let tree = []
    let maxLength = (nFloors * 2) - 1
    let topper = ''
    let space = ''
    for (let i = 1; i <= maxLength; i++) {
      topper += '*'
    }
    for (let i = 1; i <= nFloors; i++) {
      tree.push(topper)
      space += ' '
      topper = space + topper.split('').slice(i, -i).join('') + space
    }
    
    return tree.reverse()
  }