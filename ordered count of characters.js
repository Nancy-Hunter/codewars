// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = function (text) {
  let textObj = {}
  for (let i = 0; i<text.length; i++) {
    console.log(text[i])
    if (text[i] in textObj) {
      textObj[text[i]]++
    } else {
      textObj[text[i]]=1
    }
  }
  return Object.entries(textObj);
}     

//returns numbers in numerical order instead of order of apperance 