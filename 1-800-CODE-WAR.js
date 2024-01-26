// Background
// If your phone buttons have letters, then it is easy remember long phone numbers by making words from the substituted digits.

// https://en.wikipedia.org/wiki/Phoneword

// source: imgur.com
// This is common for 1-800 numbers

// 1-800 number format
// This format probably varies for different countries, but for the purpose of this Kata here are my rules:

// A 1-800 number is an 11 digit phone number which starts with a 1-800 prefix.

// The remaining 7 digits can be written as a combination of 3 or 4 letter words. e.g.

// 1-800-CODE-WAR
// 1-800-NEW-KATA
// 1-800-GOOD-JOB
// The - are included just to improve the readability.

// Story
// A local company has decided they want to reserve a 1-800 number to help with advertising.

// They have already chosen what words they want to use, but they are worried that maybe that same phone number could spell out other words as well. Maybe bad words. Maybe embarrassing words.

// They need somebody to check for them so they can avoid any accidental PR scandals!

// That's where you come in...

// Kata Task
// There is a preloaded array of lots of 3 and 4 letter (upper-case) words:

// Preloaded.WORDS

// Given the 1-800 (phone word) number that the company wants to use, you need to check against all known words and return the set of all possible 1-800 numbers which can be formed using those same digits.

// Notes
// The desired phone-word number provided by the company is formatted properly. No need to check.
// All the letters are upper-case. No need to check.
// Only words in the list are allowed.



function check1800(str) {
    let phonepad = {
        2 : ['A', 'B', 'C'],
        3 : ['D', 'E', 'F'],  
        4 : ['G', 'H', 'I'],
        5 : ['J', 'K', 'L'],
        6 : ['M', 'N', 'O'],
        7 : ['P', 'Q', 'R', 'S'], 
        8 : ['T', 'U', 'V'],
        9 : ['W', 'X', 'Y', 'Z']
      }
  
    let firstLetter = str.split('-').slice(2, 3).join('')
    let firstNumber = firstLetter.split('').map(element=> Object.keys(phonepad).find(key => phonepad[key].includes(element)))
    let secondLetter = str.split('-').slice(3).join('')
    let secondNumber = secondLetter.split('').map(element=> Object.keys(phonepad).find(key => phonepad[key].includes(element)))
    let phoneNumber = firstNumber.concat(secondNumber)
    let firstWords = Preloaded.WORDS
    let secondWords = Preloaded.WORDS
    
    
    //needs to filter to match first, second, and third letter. 
    //if first three match must also == 3 letter word
    //if four letter word all 4 letters must match
    for (let i = 0; i < 4; i++) {
      if (i == 3) {
        console.log(phoneNumber[i] , phoneNumber)
         firstWords = firstWords.filter(element => phonepad[phoneNumber[i]].includes(element[i]) || element.length==3)
         secondWords = secondWords.filter(element => phonepad[phoneNumber[i+3]].includes(element[i]) || element.length ==3)
      } else {
         firstWords = firstWords.filter(element => phonepad[phoneNumber[i]].includes(element[i]))
         secondWords = secondWords.filter(element => {
           if (element.length == 4 && phonepad[phoneNumber[i+3]].includes(element[i])) {
               return element
           } else if (element.length == 3 && phonepad[phoneNumber[i+4]].includes(element[i])) {
             return element
           } 
        })
        }
    }
    let result = []
    for (let i = 0; i < firstWords.length; i++) {
      for (let j = 0; j < secondWords.length; j++) {
        if ((firstWords[i].length==4 && secondWords[j].length==3) || (firstWords[i].length==3 && secondWords[j].length==4)){
          result.push(`1-800-${firstWords[i]}-${secondWords[j]}`)
        }
      }
    }
    return  result
}