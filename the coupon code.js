// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    console.log(enteredCode, correctCode, currentDate, expirationDate)
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let currentMonth = months.indexOf(currentDate.split(' ')[0])
    let expirationMonth = months.indexOf(expirationDate.split(' ')[0])
    let currentDay = +currentDate.split(' ')[1].split(',')[0]
    let expirationDay = +expirationDate.split(' ')[1].split(',')[0]
    let currentYear = currentDate.split(' ')[2]
    let expirationYear = expirationDate.split(' ')[2]
    let dateCheck = false
    
    if (currentYear <= expirationYear) {
      if (currentYear < expirationYear) {
        dateCheck = true
      } else {
        if (currentMonth <= expirationMonth) {
          if (currentMonth < expirationMonth) {
            dateCheck = true
          } else {
            if (currentDay<= expirationDay) {
              dateCheck = true
            }
          }
        }
      }
    }
    
    return enteredCode === correctCode && dateCheck
  }
 
  // SO MUCH EASIER!!!!
  function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
  }
  function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
  }