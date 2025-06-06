// You're a teacher preparing a test for your students. Each question is worth some number of points. Some of the questions are new to the students, while others are questions they have already seen and practiced. Your scoring system doubles the value of new questions. Your job is to determine the maximum possible score.

// Write a function doubleValue that accepts 1) an object of questions (as keys) and points (values) and 2) an array of new questions. The function should return the test's maximum possible score as an integer, where questions that are new are worth double points.

// You can assume that all questions are unique.

// Questions are case sensitive.

// Example: maxPossibleScore({"a": 1, "b": 2, "c": 3}, ["a", "c"]); // 1 * 2 + 2 + 3 * 2 = 10

function maxPossibleScore(obj, arr) {
    let result = 0
    for (const i in obj) {
      result +=  arr.includes(i)?  obj[i] * 2 : obj[i] 
    }
    return result
  }

//   in python 

//   def get_count(sentence):
//     return len(list(filter(lambda el : el in 'aeiou', sentence)))

// def max_possible_score(points, seen): 
//     result = 0
//     for el in points :
//         if el in seen :
//             result += points[el] * 2
//         else :
//             result += points[el]
//     return result