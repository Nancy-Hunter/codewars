// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
    let vowels = [...'aeiouAEIOU']
    return s.split('').map(x => {
        if (vowels.includes(x)) {
            return '!'
      } else {
          return x
      }
    }).join('')
  }