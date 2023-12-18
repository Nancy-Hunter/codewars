// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false



function validatePIN (pin) {
    return pin.length == 4 && /\d{4}/.test(pin) || pin.length==6 && /\d{6}/.test(pin)
  }

  //sleeker


  function validatePIN (pin) {
    return  /^\d{4}$/|/^\d{6}$/.test(pin) 
  }

  //backdating changes test
  //getting all the squares