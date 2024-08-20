// Little Annie is very excited for upcoming events. She wants to know how many days she has to wait for a specific event.

// Your job is to help her out.

// Task: Write a function which returns the number of days from today till the given date. The function will take a Date object as parameter. You have to round the amount of days.

// If the event is in the past, return "The day is in the past!"
// If the event is today, return "Today is the day!"
// Else, return "x days"

// PS: This is my first kata. I hope you have fun^^

function countDays(d){
    let today = new Date()
    const [todayMonth, todayDay, todayYear] = [
      today.getMonth(),
      today.getDate(),
      today.getFullYear(),
    ]
    const [testMonth, testDay, testYear] = [
      d.getMonth(),
      d.getDate(),
      d.getFullYear(),
    ]
    if (todayMonth==testMonth && todayDay == testDay && todayYear == testYear) return 'Today is the day!'
    if ((todayYear > testYear) || (testYear == todayYear && todayMonth> testMonth) || (testYear == todayYear && todayMonth == testMonth && todayDay > testDay)) {
     return 'The day is in the past!'
    }
    return Math.round((d - today)/86400000) + " days"
  }