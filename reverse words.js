// DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    return str.split('').reverse().join('').split(" ").reverse().join(" ")
  } 

// in python

// def reverse_words(text):
//     return " ".join(list(map(lambda el : el[:: -1], text.split(' '))))