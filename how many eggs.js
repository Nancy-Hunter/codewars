// Ronald's uncle left him 3 fertile chickens in his will. When life gives you chickens, you start a business selling chicken eggs which is exactly what Ronald decided to do.

// A chicken lays 300 eggs in its first year. However, each chicken's egg production decreases by 20% every following year (rounded down) until when it dies (after laying its quota of eggs).

// After his first successful year of business, Ronald decides to buy 3 more chickens at the start of each year.


// Your Task:

// For a given year, and life span of chicken span, calculate how many eggs Ronald's chickens will lay him that year, whereby year=1 is when Ronald first got his inheritance and span>0.

// If year=0, make sure to return "No chickens yet!".


// Note:

// 1. All chickens have the same life span regardless of when they are bought.
// 2. Let's assume all calculations are made at the end of the year so don't bother taking eggs laid per month into consideration.

// 3. Each chicken's egg production goes down by 20% each year, NOT the total number of eggs produced by each 'batch' of chickens. While this might appear to be the same thing, it doesn't once non-integers come into play so take care that this is reflected in your kata!

function egged(year,span) { 
    if (year == 0) return 'No chickens yet!'
    let chickenCoop = [900]
    let eggs = 300
    for (let i = 1; i < span; i++) {
      eggs = Math.floor(eggs * .8)
      chickenCoop.push(eggs*3)
    }
    return year>= span? chickenCoop.reduce((acc, el)=> acc + el, 0) : chickenCoop.slice(0, year).reduce((acc, el)=> acc + el, 0)
  }
  