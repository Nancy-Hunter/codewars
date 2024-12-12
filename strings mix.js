// Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

// s1 = "A aaaa bb c"

// s2 = "& aaa bbb c d"

// s1 has 4 'a', 2 'b', 1 'c'

// s2 has 3 'a', 3 'b', 1 'c', 1 'd'

// So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

// We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

// The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

// In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

// Hopefully other examples can make this clearer.

// s1 = "my&friend&Paul has heavy hats! &"
// s2 = "my friend John has many many friends &"
// mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1="Are the kids at home? aaaaa fffff"
// s2="Yes they are here! aaaaa fffff"
// mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
// Note for Swift, R, PowerShell
// The prefix =: is replaced by E:

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/E:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/E:ee/E:ss"

function mix(s1, s2) {
    let alphabet = [...'abcdefghijklmnopqrstuvwxyz']
    //filter input sentences to only include letters with multiple occurances
    s1 = s1.split('').filter(el=> alphabet.includes(el)).sort().filter((el, _ind, arr)=> arr.indexOf(el) != arr.lastIndexOf(el))
    s2 = s2.split('').filter(el=> alphabet.includes(el)).sort().filter((el, _ind, arr)=> arr.indexOf(el) != arr.lastIndexOf(el))
    let count1 = []
    let count2 = []
    //create an array of objects containing letter (id), reoccurance (value), and origin (sentence)
    s1.forEach(el=> {
      if (count1.some(item=> item.id == el)) {
        let objIndex = count1.findIndex(obj => obj.id == el);
        count1[objIndex].value++
      } else {
        let letter = {id : el, value : 1, sentence: 1}
        count1.push(letter)
      }
    })
    s2.forEach(el=> {
      if (count2.some(item=> item.id == el)) {
        let objIndex = count2.findIndex(obj => obj.id == el);
        count2[objIndex].value++
      } else {
        let letter = {id : el, value : 1, sentence: 2}
        count2.push(letter)
      }
    })
    //array of unique letters to be catagorized
    let collated = new Set(s1.concat(s2))
    let collatedArr = []
    //concat arrays to be used in result
    collated.forEach(el=> {
      //index of letter being added to array
      let objIndex1 = count1.findIndex(obj => obj.id == el);
      let objIndex2 = count2.findIndex(obj => obj.id == el);
      //if letter occurs in both sentences add higher value or add value and change origin (sentence) to 3
      if (objIndex1 >=0 && objIndex2 >=0) {
        count1[objIndex1].value>count2[objIndex2].value? collatedArr.push(count1[objIndex1]):count1[objIndex1].value==count2[objIndex2].value? collatedArr.push({id : count2[objIndex2].id, value : count2[objIndex2].value, sentence: 3}):collatedArr.push(count2[objIndex2])
      } else {
        //if letter only occurs in one sentence add value
        objIndex2 == -1? collatedArr.push(count1[objIndex1]):collatedArr.push(count2[objIndex2])
      }
    })
    //sort by sentence
    collatedArr.sort((a, b)=> a.sentence-b.sentence)
    //sort by reoccurance value
    collatedArr.sort((a, b)=> b.value-a.value)
    
    let result = ''
    //result built with sentence 3 changed to '='
    collatedArr.forEach(el=> {
      result += `${el.sentence==3? '=':el.sentence}:${el.id.repeat(el.value)}/`
    })
    //remove trailing /
    return result.slice(0, result.length-1)
  }