// Task
// The UK driving number is made up from the personal details of the driver. The individual letters and digits can be code using the below information
// Rules
// 1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

// 6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

// 7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

// 9–10: The date within the month of birth

// 11: The year digit from the year of birth (e.g. for 1987 it would be 7)

// 12–13: The initial letter of the first name and middle name, padded with a 9 if no middle name

// 14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9

// 15–16: Two computer check digits. We will always use "AA"
// Your task is to code a UK driving license number using an Array of data. The Array will look like

// data = ["John","James","Smith","01-Jan-2000","M"];
// Where the elements are as follows

// 0 = Forename
// 1 = Middle Name (if any)
// 2 = Surname
// 3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
// 4 = M-Male or F-Female
// You will need to output the full 16 digit driving license number, in all UPPERCASE.

function driver(data) {
    let month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    //Name data digits 
    let DL = data[2].length>=5? data[2].slice(0,5).toUpperCase():  data[2].slice(0).toUpperCase() 
    //add nines if under 5 digits
    while (DL.length <5) {
      DL+= '9'
    }
    //add decade digit
    DL+= data[3].split('-')[2][2]
    //add birth month with 5 increment if female
    let targetMonth = month.indexOf(data[3].split('-')[1].toLowerCase().split('').slice(0, 3).join('')) + 1
    if (targetMonth < 10) {
      DL += data[4] == 'M'? '0' + targetMonth  : '5' + targetMonth
    } else {
      DL += data[4] == 'M'? targetMonth  : '6' + targetMonth.toString().split('')[1]
    }
    //add birth date
    DL += data[3].split('-')[0]
    //add last digit of birth year
    DL+= data[3].split('-')[2][3]
    //add first initial
    DL += data[0][0]
    //add first letter of middle name of 9 if null
    DL += data[1][0]? data[1][0] : '9'
    //add 9AA
    DL += '9AA'
    return DL
  }