let arr = []
for (let i = 0; i < 5; i++) {
  arr.push(parseInt(Math.random() * 10))
}

// console.log(arr)

// [ 2, 1, 4, 0, 9 ]
// let newArr = arr.map((val, idx) => {
//   return val + 1
// })

// console.log(newArr)

const repMap = (array, cb) => {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result.push(cb(array[i], i, array))
  }

  return result
}

// console.log(repMap([1,2,3,4,5], (val, idx, array) => {
//   return 3
// }))

// let newArr = arr.filter((val, idx, array) => {
//   if (val <= 5) {
//     return true
//   } else {
//     return false
//   }
// })

// console.log(newArr)

const repFilter = (array, cb) => {
  let result = []
  for (let i = 0; i < array.length; i++) {
    if(cb(array[i], i, array)) {
      result.push(array[i])
    }
  }

  return result
}

// console.log(repFilter(arr, (val, idx, array) => {
//   return val <= array.length // 5
// }))

// console.log(arr.find((val, idx, array) => {
//   return true
// }))










const repFind = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    if(cb(array[i], i, array)) {
      return array[i]
    }
  }
}






// digitalRoot (number)
// number = 942
// 9 + 4 + 2
// 15
// 1 + 5
// 6

// number = 132189
// 1 + 3 + 2 + 1 + 8 + 9
// 24
// 2 + 4
// 6

const digitalRoot = (number) => {
  while (number > 9) {
    let splitNum = number.toString().split('')
    splitNum = splitNum.map(Number)


    let result = 0
    for (let i = 0; i < splitNum.length; i++) {
      result += splitNum[i]
    }
    number = result
    // [9, 4, 2] 
    // number = splitNum.reduce((a, b) => a + b)
  }

  return number
}

// console.log(digitalRoot(942))

// [1, 2, 3, 4, 5, 6]
// [1, 5, 6, 9, 13, 7]

// [1,2,3,4,5,6,9,13,7]

















// console.log(uniqueArr(arr1, arr2))

let arr1 = [1, 2, 3, 4, 5, 6]
let arr2 = [1, 5, 6, 9, 13, 7]

const uniqueArr2 = (pertama, kedua) => {
  let arrCheck = []
  for (let i = 0; i < pertama.length; i++) {
    if (!arrCheck.includes(pertama[i])) {
      arrCheck.push(pertama[i])
    }
  }

  for (let j = 0; j < kedua.length; j++) {
    if (!arrCheck.includes(kedua[j])) {
      arrCheck.push(kedua[j])
    }
  }

  return arrCheck
}


// const uniqueArr = (arr1, arr2) => {
//   return [...new Set([...arr1, ...arr2])]
// }

console.log(uniqueArr2(arr1, arr2))