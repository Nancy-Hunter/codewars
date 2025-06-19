// Common denominators

// You will have a list of rationals in the form

// { {numer_1, denom_1} , ... {numer_n, denom_n} } 
// or
// [ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
// or
// [ (numer_1, denom_1) , ... (numer_n, denom_n) ] 
// where all numbers are positive ints. You have to produce a result in the form:

// (N_1, D) ... (N_n, D) 
// or
// [ [N_1, D] ... [N_n, D] ] 
// or
// [ (N_1', D) , ... (N_n, D) ] 
// or
// {{N_1, D} ... {N_n, D}} 
// or
// "(N_1, D) ... (N_n, D)"
// depending on the language (See Example tests) in which D is as small as possible and

// N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
// Example:
// convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
// Note:
// Due to the fact that the first translations were written long ago - more than 6 years - these first translations have only irreducible fractions.

// Newer translations have some reducible fractions. To be on the safe side it is better to do a bit more work by simplifying fractions even if they don't have to be.

// Note for Bash:
// input is a string, e.g "2,4,2,6,2,8" output is then "6 12 4 12 3 12"

function convertFrac(lst){
  if (lst.length== 0) return ''
  
  let copy = lst.slice(0)
  let largestD = copy.reduce((acc, el)=> acc * el[1], 1)
  let lowestD = copy.sort((a, b)=> a[1] - b[1])[copy.length-1][1]
  let demonator = lowestD
  while(demonator <= largestD && !copy.every(el=> demonator % el[1] == 0)) {
    demonator += lowestD
  }
  if (demonator > largestD) return 'irreducable'
  let result = ''
  for (let i = 0; i < lst.length; i++) {
    result += `(${(demonator/lst[i][1])*lst[i][0]},${demonator})`
  }
  return result
}