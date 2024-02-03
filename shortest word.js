// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let lengthArray = s.split(' ').map(current=> current.length)
    let minIndex = lengthArray.indexOf(Math.min(...lengthArray))
    return lengthArray[minIndex]
 }