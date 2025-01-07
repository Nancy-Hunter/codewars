// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    let result = []
    str = str.split('')
    if (str.length % 2 != 0) {
      str.push('_')
    }
    for (let i = 0; i < str.length; i+=2) {
      result.push(str.slice(i, i + 2).join(''))
    }
    return result
  }

  // in python 

  // def solution(s):
  //   result = []
  //   s = s + "_" if len(s) % 2 != 0 else s
  //   while s :
  //       result.append(s[:2])
  //       s = s[2:]
  //   return result

  // more readable

  // def solution(s):
  //   result = []
  //   if len(s) % 2:
  //       s += '_'
  //   for i in range(0, len(s), 2):
  //       result.append(s[i:i+2])
  //   return result