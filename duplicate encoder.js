// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
    let unique = word.toLowerCase().split('').filter((el, _index, arr)=> arr.indexOf(el)==arr.lastIndexOf(el))
    return word.toLowerCase().split('').map(el=> unique.includes(el)? '(':')').join('')
}

//done a few weeks later in about 5 or less minutes

function duplicateEncode(word){
    return word.toLowerCase().split('').map((el, _index, arr)=> {
      if (arr.indexOf(el)==arr.lastIndexOf(el)) {
        return '('
      }
      return ')'
    }).join('')
  }