// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

function isPalindrome(x) {
    let half = Math.round(x.length/2)
    return x.toLowerCase().slice(0, half) == x.toLowerCase().slice(-half).split('').reverse().join('')
  }