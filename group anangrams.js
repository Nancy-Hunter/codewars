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


//works but is too slow for giant tests have to take out console.logs to work for superhero tests

function groupAnagrams(words){
  let sortedWords = words.map((current, index, arr)=> current.split('').sort().join(''))
  let result = []
  let sortedResult = []
  console.log(sortedWords, words)
  for (let i = 0; i<words.length; i++) {
    if (i == 0 ||  !sortedResult.includes(sortedWords[i])){
      sortedResult.push(sortedWords[i])
      result.push([])
      result[result.length-1].push(words[i])
    } else {
      result[sortedResult.indexOf(sortedWords[i])].push(words[i])
    }
  }
  console.log(sortedResult, result)
  return result
}  