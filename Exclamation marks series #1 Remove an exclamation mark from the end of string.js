// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

function remove (string) {
    return string[string.length-1] == '!' ? string.slice(0, string.length-1) : string
  }

  // in python 

  // def replace_exclamation(st):
  //   vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  //   for el in vowels :
  //       st = st.replace(el, "!")
  //   return  st 

  // def replace_exclamation(s):
	// for i in "aeuioAEUIO":	s = s.replace(i, "!")
	// return s

  // def replace_exclamation(s):
  //   return ''.join('!' if c in 'aeiouAEIOU' else c for c in s)