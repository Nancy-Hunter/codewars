// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    let alphabet = [...' abcdefghijklmnopqrstuvwxyz']
    let word
    x = x.split(' ')
    let numberArr = x.map(current => {
      word = current.split('')
      return word.reduce((acc, element)=> acc + alphabet.indexOf(element), 0)
      })
    let highestScore = numberArr.indexOf(Math.max(...numberArr))
    return x[highestScore]
  }