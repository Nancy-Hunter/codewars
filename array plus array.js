// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    return [...arr1, ...arr2].reduce((acc, el)=> acc + el, 0)
  }


  // IN PYTHON

  // def array_plus_array(arr1,arr2):
  //   arr = arr1 + arr2
  //   sum = 0
  //   for i in range(len(arr)):
  //       sum += arr[i]
  //   return sum