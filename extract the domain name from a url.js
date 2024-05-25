// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    let noHTTP = url.split('//')
    let noCOM = noHTTP[noHTTP.length-1].split('.')
    return noCOM[0]=='www'? noCOM[1]: noCOM[0]
  }