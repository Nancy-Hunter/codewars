// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

function isValidIP(str) {
  let tetra = str.split('.')
  let numbers = [...'0123456789'] 
  if (tetra.length != 4) return false
  if (!tetra.every(el=> el<256 && el>=0)) return false
  if (!tetra.every(el=> el.length>0)) return false 
  if (tetra.some(el=> el.split('')[0]== 0 && el.split('').length>1 )) return false
  if (!tetra.join('').split('').every(el=> numbers.includes(el))) return false    
  return true
}