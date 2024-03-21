// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

//parameters result examples psuedocode
//string of at least one word and possibly more seperated by spaces
//reversed if word length is 5 or over
//split sentence into words
//pass through all words and flip if over 5
//rejoin sentence and return
function spinWords(string){
    let result = []
    string = string.split(' ')
    for (let i = 0; i < string.length; i++) {
      if (string[i].length>= 5) {
        result.push(string[i].split('').reverse().join(''))
      } else {
        result.push(string[i])
      }
    }
    console.log(result.join(' '))
    return result.join(' ')
  }