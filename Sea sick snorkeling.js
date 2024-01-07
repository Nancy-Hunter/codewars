// Thanks to the effects of El Nino this year my holiday snorkelling trip was akin to being in a washing machine... Not fun at all.

// Given a string made up of '~' and '_' representing waves and calm respectively, your job is to check whether a person would become seasick.

// Changes from calm to wave or wave to calm will add to the effect (really wave peak to trough but this will do). Find out how many changes in level the string has and if that number is more than 20% of the length of the string, return "Throw Up", else return "No Problem".

function seaSick(x){
    let current = x[0]
    let counter = 0
    for (let i = 1; i < x.length; i++) {
      if (current != x[i]) {
        current = x[i]
        counter++
      }
    }
    return (counter/x.length*100) > 20? "Throw Up" : "No Problem"
  }