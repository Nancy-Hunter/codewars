// Your job is to group the words in anagrams.

// What is an anagram ?
// star and tsar are anagram of each other because you can rearrange the letters for star to obtain tsar.

// Example
// A typical test could be :

// // input
// ["tsar", "rat", "tar", "star", "tars", "cheese"]

// // output
// [
//   ["tsar", "star", "tars"],
//   ["rat", "tar"],
//   ["cheese"]
// ]
// Hvae unf !

// I'd advise you to find an efficient way for grouping the words in anagrams otherwise you'll probably won't pass the heavy superhero test cases


//non functioning!!

function isSubset(current, index, arr) {
    let currentWordArr = current.split('').sort()
    
  }
    
  function groupAnagrams(words){
    return words.reduce((result, current, index, arr)=> {
      if ( !index || !isSubset(current, index, arr) result.push([])
      result[result.length - 1].push(current)
      return result 
    }, [])
  }  