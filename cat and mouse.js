// You will be given a string (map) featuring a cat "C" and a mouse "m". The rest of the string will be made up of dots (".") The cat can move the given number of moves up, down, left or right, but not diagonally.

// You need to find out if the cat can catch the mouse from it's current position and return "Caught!" or "Escaped!" respectively.

// Finally, if one of two animals are not present, return "boring without two animals".

// Examples
// moves = 5

// map =
// ..C......
// .........
// ....m....

// returns "Caught!" because the cat can catch the mouse in 4 moves
// moves = 5

// map =
// .C.......
// .........
// ......m..

// returns "Escaped!" because the cat cannot catch the mouse in  5 moves

function catMouse(map,moves){
    if (!map.includes("m") || !map.includes("C")) {
      return "boring without two animals"
    }
    let catX, mouseX, catY, mouseY
    let expandBoard = map.split("\n")
    for (let i = 0; i<expandBoard.length; i++){
      if (expandBoard[i].includes("C")) {
          catX = expandBoard[i].indexOf("C") + 1
          catY = i + 1
      }
      if (expandBoard[i].includes("m")) {
          mouseX = expandBoard[i].indexOf("m") + 1
          mouseY = i + 1
      }
    }
    let movesNeededToCatch = Math.abs(catX - mouseX)+ Math.abs(catY-mouseY)
    console.log(movesNeededToCatch)
    console.log(expandBoard)
    console.log(catX, catY, mouseX, mouseY)
    return movesNeededToCatch<=moves ? "Caught!" : "Escaped!"
  }