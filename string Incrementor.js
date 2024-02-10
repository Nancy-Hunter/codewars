// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (string) {
    let numbers = [...'123456789']
    let letters = [...'abcdefghijklomnopqrstuvwxyz0']
    let firstNumberIndex =  string.length-1
    while (!letters.includes(string[firstNumberIndex]) && firstNumberIndex>=0) {
      firstNumberIndex--
    }
    firstNumberIndex++
    //firstNumberIndex runs til it hits a letter or the number zero
    
    let seperatedNumber = string.slice(firstNumberIndex)
    let seperatedString = string.slice(0, firstNumberIndex)
    //creates strings seperating the number from the string
   
    if (seperatedString[seperatedString.length-1]== 0 && seperatedNumber == 0 || seperatedString[seperatedString.length-1]== 0 && seperatedNumber[0] == 9 ){
      return seperatedString.slice(0, -1) + (Number(seperatedNumber) + 1)
    }
    //returns if number includes zeros preceeding it
    seperatedNumber = Number(seperatedNumber) + 1
    return (seperatedString + seperatedNumber)
    
  }