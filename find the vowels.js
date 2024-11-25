// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

function vowelIndices(word){
    let vowels = [...'aeiouyAEIOUY']
    let result = []
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        result.push(i+1)
      }
    }
    return result
  }