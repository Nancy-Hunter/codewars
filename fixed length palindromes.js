// Four-digit palindromes start with [1001,1111,1221,1331,1441,1551,1551,...] and the number at position 2 is 1111.

// You will be given two numbers a and b. Your task is to return the a-digit palindrome at position b if the palindromes were arranged in increasing order.

// Therefore, palin(4,2) = 1111, because that is the second element of the 4-digit palindrome series.

// More examples in the test cases. Good luck!

function palin(a,b){
    let palindromes = []
    for (let i = 10 ** (Math.floor(a/2)-1); i < 10 ** (Math.floor(a/2)-1) + b; i++) {
        palindromes.push(i)   
    }
    if (a % 2 == 0) {
      palindromes = palindromes.map(el=> +(el.toString() + el.toString().split('').reverse().join('')))
      return palindromes[b-1]
    } else {
       let oddPalindromes = []
       for (let i = 0; i <= 9; i++){
          oddPalindromes.push(...palindromes.map(el=> {
                      return +(el.toString() + i.toString() + el.toString().split('').reverse().join(''))
                      })
      )}
      oddPalindromes.sort((a, b)=> a-b)
      return oddPalindromes[b-1]
    }
  };