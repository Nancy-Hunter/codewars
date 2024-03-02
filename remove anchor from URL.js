// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    console.log(url)
    let hashIndex = url.split('').indexOf('#')
    if (hashIndex == -1) {
      return url
    }
    return url.split('').slice(0, hashIndex).join('')
  }