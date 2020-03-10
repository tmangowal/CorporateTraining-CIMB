



let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [...arr1]

let a = 1
let b = a

a += 1

arr1.push('hello')

        // [1,2,3,4,5,6]
// console.log([...arr1, ...arr2])
// [1, 2, 3, 17]
// console.log(1, 2, 3)
// console.log(arr3)

// console.log(arr3)

let mobil1 = {
  tahun: 2000,
  merek: 'Toyota',
  harga: 10000
}

let mobil2 = {...mobil1, merek: 'Mercedes'}
// let mobil2 = {
//  tahun: 2000,
//  merek: 'Toyota',
//  harga: 10000,
//  jumlahPintu: 4
//  }

console.log(mobil2)