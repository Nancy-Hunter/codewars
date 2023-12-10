// Task.

// Calculate area of given triangle. Create a function t_area that will take a string which will represent triangle, find area of the triangle, one space will be equal to one length unit. The smallest triangle will have one length unit.

// Hints

// Ignore dots.

// All triangles will be right isoceles.

// Example:

// .
// .      .  
// .      .       .      ---> should return 2.0

// .
// .      .  
// .      .       .     
// .      .       .      .      ---> should return 4.5

function tArea(tStr) {
    let triangle = tStr.split("/n")
    let x = triangle.length
    let y = triangle[x-1].length
    console.log(x, y)
    return (x * y)/2
  }