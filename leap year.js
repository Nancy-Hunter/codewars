//write a function that returns true or false if year inputed is a leap year. Every year divisible by 4 is a leap year. However if the year is divisible by 100 it is not a leap year unless it is also divisible by 400

function isLeapYear(year) {
  if (year%400==0) {
    return true
  } else if (year%100 ==0) {
    return false
  } else if (year%4 == 0) {
    return true
  } 
  return false
} 