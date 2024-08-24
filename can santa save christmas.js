// Can Santa save Christmas?
// Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

// But he has only 24 hours left. Can he do it?

// Your Task:
// You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .

function determineTime (durations) {
    let timeArr = durations.reduce((acc, el)=>{
       el = el.split(':')
      acc[0] += +el[0]
      acc[1] += +el[1]
      acc[2] += +el[2]
      return acc
    }, [0, 0, 0])
    return timeArr[0]+(timeArr[1] + timeArr[2]/60)/60 <= 24
  }