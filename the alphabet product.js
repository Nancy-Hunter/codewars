// I have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order. Your task is to return the value of D.

function alphabet(ns) {
    console.log(ns)
    let sorted = ns.sort((a,b)=> a-b)
    let A = sorted.shift()
    let B = sorted.shift()
    let C = ns.filter(x=> {
      if (sorted.includes(x * B) && x>B) 
      {
        return x
      }})
    C = C[0]
    let D = ns.filter(x=> {
      if (sorted.includes(x * C) && (x * A) && x>C) 
      {
        return x
      }})
    
    console.log(sorted, A, B, C, D)
    return D[0]
  }