// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
    //console.log(`text is "${text}" n number of times "${n}"`)
    if (Boolean(text)==false || n <= 0 ) {
      return text
    }
    let even = []
    let odd = []
    let splitText = text.split('')
    for (let i = 0; i < n; i++ ) {
      splitText.forEach((current, index)=> {
        if (index % 2 == 0) {
          even.push(current)
        } else {
          odd.push(current)
        }
      })
      splitText = odd.concat(...even)
      //console.log(`Right now odds are ${odd} and evens are ${even} and splitText is ${splitText}`)
      even = []
      odd = []
    }
    return splitText.join('')
  }
  
  function decrypt(encryptedText, n) {
    console.log(`text is "${encryptedText}" n number of times "${n}"`)
    if (Boolean(encryptedText)==false || n <= 0 ) {
      return encryptedText
    }
    let odd = []
    let even = []
    let half = Math.floor(encryptedText.length/2)
    let workingText = encryptedText.split('')
    
    for (let i = 0; i < n; i++) {
      odd = workingText.slice(0, half)
      even = workingText.slice(half)
      workingText = []
      for (let j = 0; j <= half; j++) {
        workingText.push(even[j])
        workingText.push(odd[j])
      }
      console.log(`Right now odds are ${odd} and evens are ${even} and workingText is ${workingText}`)
      even = []
      odd = []
     }
    return workingText.join('')
  }