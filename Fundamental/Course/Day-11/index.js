

const validator = (arr,  cb) => {
  let arrResult = []
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      arrResult[i] = 1
    } else {
      arrResult[i] = 0
    }
  }

  return arrResult
}

// let arrParam = [3,7,4,7,1,2]
// [1, 1, 0, 1 ,1, 0]
// arrParam = [1,2,3,4]
// ]

// console.log(validator(arrParam, (val) => {
//   return val + 1
// }))

const repMap = (arr, cb) => {
  let arrResult = []
  for(let i = 0; i < arr.length; i++) {
    arrResult.push(cb(arr[i]))
  }
  return arrResult
}

// console.log(repMap([1,2,3,4], (val) => {
//   return val * 2
// }))

let arr = [1, 2, 3, 4]

console.log(arr.map((val) => {
  return val * 2
}))
