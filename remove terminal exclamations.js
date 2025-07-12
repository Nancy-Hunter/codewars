// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

function remove(string) {  
  let string2 = string.split('')
  while (string2[string2.length-1] == '!') {
    string2.pop()
  }
  return string2.join('')
}