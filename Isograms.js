// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){
    let lowerCaseStr = str.toLowerCase()
    for (let i = 0; i<lowerCaseStr.length; i++){
      if (lowerCaseStr.indexOf(lowerCaseStr[i]) != lowerCaseStr.lastIndexOf(lowerCaseStr[i])) {
        return false
      } 
    }
    return true
  }

  // in python 

  // def is_isogram(string):
  //   string = string.lower()
  //   for el in string :
  //       if string.rindex(el) != string.index(el) :
  //           return False
  //   return True