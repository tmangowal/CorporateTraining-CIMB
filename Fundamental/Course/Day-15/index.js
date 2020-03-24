let param1 = 'hello'
let param2 = 'world'

const fnBaru = (param2, param1) => {  // Declaration
  return param2 + ' ' + param1    // Program
}

// console.log(fnBaru(param1, param2))  // Execution (execute atau call)

//console.log(param2 + ' ' + param1)

let a = 'abc' // global variable
const fnKedua = () => {
  a = 'cba'
}

// fnKedua()

// console.log(a)

let arr = [1,2,3,4,5]

// arr.forEach((val, idx, arr) => {
  // iterasi 2
  // val = 2
  // idx = 1
  // arr = [1,2,3,4,5]
  // console.log(val, idx, arr)
// })

const forEachRep = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    cb(array[i], i, array) // execute / call
  }
}

// forEachRep(arr, () => {
//   console.log()
// })

for (let item of arr) {
  console.log(item)
}

// for (let i = 0; i < arr.length; i++) {
//   arr[i]
// }

let saya = {
  nama: 'Theo',
  pekerjaan: 'Pengajar',
  status: 'Sehat'
}

for (let key in saya) {
  key = 'pekerjaan'
  console.log(key, saya['pekerjaan'])
}

let nama = 'status'

console.log(saya[nama])

saya['nama']
console.log(saya.nama)

setTimeout(() => {
  console.log('Hello World')
}, 3000)

const testInterval = () => {
  setInterval(() => {
    console.log('Halo Dunia')
  }, 1000)
}