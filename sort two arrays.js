// Description:
// Give you two arrays arr1 and arr2. They have the same length(length>=2). The elements of two arrays always be integer.

// Sort arr1 according to the ascending order of arr2; Sort arr2 according to the ascending order of arr1. Description is not easy to understand, for example:

// arr1=[5,4,3,2,1], 
// arr2=[6,5,7,8,9]
// Let us try to sorting arr1. First, we need know the ascending order of arr2:

// [5,6,7,8,9]
// We can see, after sorting arr2 to ascending order, some elements' index are changed:

// unsort arr2      ascending order arr2
// [6,5,7,8,9]--->      [5,6,7,8,9]

// index0(6)  --->      index1
// index1(5)  --->      index0
// index2(7)            index2(no change)
// index3(8)            index3(no change)
// index4(9)            index4(no change)
// So, we need to sort arr1 according to these changes:

// unsort arr1          sorted arr1
// [5,4,3,2,1]--->      [4,5,3,2,1]

// index0(5)  --->      index1
// index1(4)  --->      index0
// index2(3)            index2(no change)
// index3(2)            index3(no change)
// index4(1)            index4(no change)

// So: sorted arr1= [4,5,3,2,1]
// And then, we're sorting arr2 with the same process:

// unsort arr1      ascending order arr1
// [5,4,3,2,1]--->      [1,2,3,4,5]

// index0(5)  --->      index4
// index1(4)  --->      index3
// index2(3)            index2(no change)
// index3(2)  --->      index1
// index4(1)  --->      index0

// unsort arr2          sorted arr2
// [6,5,7,8,9]--->      [9,8,7,5,6]

// index0(6)  --->      index4
// index1(5)  --->      index3
// index2(7)            index2(no change)
// index3(8)  --->      index1
// index4(9)  --->      index0

// So: sorted arr2= [9,8,7,5,6]
// Finally, return sorted arrays as a 2D array: [sorted arr1, sorted arr2]

// Note: In ascending order sorting process(not the final sort), if some elements have same value, sort them according to their index; You can modify the original array, but I advise you not to do that. ;-)

// Some Examples and explain
// sortArrays([5,4,3,2,1],[6,5,7,8,9]) should return
// [[4,5,3,2,1],[9,8,7,5,6]]

// sortArrays([2,1,3,4,5],[5,6,7,8,9]) should return
// [[2,1,3,4,5],[6,5,7,8,9]]

// sortArrays([5,6,9,2,6,5],[3,6,7,4,8,1]) should return
// [[5,5,2,6,9,6],[4,3,1,6,8,7]]

//DOESNT WORK FOR REPEATED NUMBERS
function sortArrays(arr1,arr2){
    let ascendingArr2 = arr2.slice(0).sort((a, b)=> a-b)
    let ascendingArr1 = arr1.slice(0).sort((a, b)=> a-b)
    let arr1copy
    console.log(arr1, ascendingArr1, arr2,  ascendingArr2)
    let sortedArr1 = []
    let sortedArr2 = []
    
    for (let i = 0; i < arr2.length; i++) {
      sortedArr1.push(arr1[arr2.indexOf(ascendingArr2[i])])
     
      sortedArr2.push(arr2[arr1.indexOf(ascendingArr1[i])])
  
    }
    console.log(arr1, arr2, sortedArr1, sortedArr2)
    return [sortedArr1, sortedArr2]
  
  }