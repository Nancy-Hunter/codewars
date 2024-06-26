// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"

function toWeirdCase(string){
    return string.split(' ').map(el=> {
      return el.split('').map((letter, index)=> {
        if (index % 2 != 0) {
          return letter.toLowerCase()
        }
        return letter.toUpperCase()
      }).join('')
    }).join(' ')
  }
//second try (maybe with a bit of cheating)
  function toWeirdCase(string){
    return string.toLowerCase().split(' ').map(el=> {
      return el.split('').map((letter, index)=> {
        if (index % 2 == 0) return letter.toUpperCase()
        return letter
      }).join('')
    }).join(' ')
  }