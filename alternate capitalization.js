// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

function capitalize(s){
    let wordOne = ''
    let wordTwo = ''
    s.split('').forEach((element, index) => {
                              if (index % 2 == 0) {
                                  wordOne += element.toUpperCase()
                                  wordTwo += element.toLowerCase()
                              } else {
                                  wordOne += element.toLowerCase()
                                  wordTwo += element.toUpperCase()
                              }   
                           })
    return [wordOne, wordTwo]
    };