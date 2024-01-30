// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n){
    if (n % 2 == 0 || n<=0) {
      return null
    }
    let diamond = ['*'.repeat(n)+'\n']
    let count = 1
    for (let i = (n-2); i>0; i=i-2) {
      diamond.push( ' '.repeat(count) + '*'.repeat(i) + '\n')
      diamond.unshift( ' '.repeat(count) + '*'.repeat(i) + '\n')
      count++
    }
    return diamond.join('')
  }