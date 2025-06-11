// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters

function kebabize(str) {
  let result = []
  str = str.split('').filter(el=> !isFinite(+el)).join('')
  let temp = str[0].toLowerCase()
  for (let i = 1; i < str.length; i ++) {
    if (isCapitalized(str[i]) || (i == str.length-1)) {
      if (i == str.length-1) {
        if (isCapitalized(str[i])) {
           result.push(temp.toLowerCase())
           temp = ''
        }
        temp += str[i]
      }
      result.push(temp.toLowerCase())
      temp = ''
    }
    temp += str[i]
  }
  return temp.length==0? temp : result.join('-')
}

function isCapitalized (char) {
  return char.toUpperCase() == char
}