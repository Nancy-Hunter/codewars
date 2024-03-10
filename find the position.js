// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let index = alphabet.indexOf(letter)
    return `Position of alphabet: ${index + 1}`
  }