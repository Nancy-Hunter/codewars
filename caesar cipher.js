// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


//97-122 a-z 109 switch to front
//65-90 A-Z  77 switch to front
function rot13(message){
    return message.split('').map(x=> {
      if (x.charCodeAt(0)>=97 && x.charCodeAt(0)<=109) {
        return String.fromCharCode(x.charCodeAt(0)+13)
      }else if (x.charCodeAt(0)>=110 && x.charCodeAt(0)<=122) {
        return String.fromCharCode(96 +(13-(122-x.charCodeAt(0))))
      } else if (x.charCodeAt(0)>=65 && x.charCodeAt(0)<=77) {
        return String.fromCharCode(x.charCodeAt(0)+13)
      }else if (x.charCodeAt(0)>=78 && x.charCodeAt(0)<=90) {
        return String.fromCharCode(64 +(13-(90-x.charCodeAt(0))))
      } else {
        return x
      }
    }).join('')
  }
