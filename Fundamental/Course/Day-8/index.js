
// function alphaValue (param1, param2) {
//   return param1 + param2
// }

// alphaValue() // string

// const alphaValue = (param1, param2) => param1 == param2

const alphaValue = (str) => {
  // str = 'afiehbe'
  // str = str.split('')
  // str = ['a', 'f' ...]
  let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let result = 0

  for (let i = 0; i < str.length; i++) {
    result += (alpArray.indexOf(str.charAt(i)) + 1)
  }

  return result
}

// console.log(alphaValue('abc'))

const alphaValueGanjil = str => {
  let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let result = 0

  for(let i = 0; i < str.length; i+=2) {
    result += (alpArray.indexOf(str.charAt(i)) + 1)
  }

  return result
}

// console.log(alphaValueGanjil('abc'))

const alphaEncoder = str => {
  let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let result = ''

  for(let i = 0; i < str.length; i++) {
    result += (alpArray.indexOf(str.charAt(i)) + 1)
  }

  return result
}

// console.log(alphaEncoder('xyz'))

class Product {
  constructor(name, price, stock){
    this.name = name
    this.price = price
    this.stock = stock
  }
}



const searchProductName = str => {
  let hasil = arrProd.filter(({ name }) => name.toLowerCase().includes(str.toLowerCase()))
  return hasil
}

const searchProductPrice = (min, max) => {
  return arrProd.filter(val => val.price >= min && val.price <= max)
}


let arrProd = [
  new Product('Apel', 3000, 2),
  new Product('Mangga', 7000, 2),
  new Product('Jeruk', 5000, 2),
  new Product('Manggis', 13000, 2),
  new Product('Apple', 45000, 2),
  new Product('Amazon', 32000, 2),
  new Product('Verizon', 21000, 2),
  new Product('Google', 28000, 2),
  new Product('Facebook', 25000, 2),
]

// console.log(searchProductName('ap'))
// console.log(searchProductPrice(5000, 25000))

// let a = {
//   nama: 'Doraemon',
//   asal: 'Jepang',
//   kontak: {
//     rumah: 'Di rumah',
//     kota: 'BSD'
//   }
// }

// let { nama, asal, kontak: { rumah, kota } } = a

// const tampilNama = ({ nama, asal }) => {
//   return nama
// }

// tampilNama(a)


const sumFn = (arr) => {
  let positives = 0
  let negatives = 0
  arr.forEach(element => {
      if(element >= 0){
          positives += element
      }else{
          negatives += element
      }
  });
  return [positives, negatives]
}

console.log(sumFn([1,2,3,-3,-2,-1]))


