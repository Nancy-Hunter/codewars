// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    let alphabet = [...'abcdefghijklmnopqrstuvwxyz']
    return str.split(' ')
              .map(word=> {
                   if (!alphabet.includes(word[0].toLowerCase())) return word
                   let letterArray = word.split('')
                   return [...letterArray.slice(1), letterArray.slice(0,1), 'ay'].join('')
              }).join(' ')
  }