// function gakReturn () {
//   let a, b;

//   a + b
// }

// function adaReturn () {
//   return 'HELLOOOOO'
// }

// function tambah(a, b) {
//    a + b
// }

// let c;

// function ubahC () {
//   c = 3
// }

// ubahC()

// console.log(1 + 2 + c)

// function tambah1() {
//   return 3
// }

// function tambah2(a) {
//   return a
// }

// console.log(tambah1() + tambah2(2))

// let arr = [1, 2, 3, 4];

// let obj = {
//   tahun: 2000,
//   nama: "DOraemon",
//   kontak: {
//     rumah: "Jl jalanan",
//     telfon: [081234, 084321]
//   }
// };

// function testing() {
//   return {
//     tahun: 2000,
//     nama: "DOraemon",
//     kontak: {
//       rumah: "Jl jalanan",
//       telfon: [081234, 084321]
//     }
//   };
// }

// console.log(testing().kontak.telfon.forEach());

// function tambah(a, b) {
//   return a + b
// }

// console.log(tambah(3, 7))

// let orang = {
//   nama: 'Theo',
//   tahunLahir: '1990',
//   asal: 'Manado'
// }

// let developer = {
//   nama: 'Theo',
//   tahunLahir: '1990',
//   asal: 'Manado',
//   specialty: 'Front End Web',
//   pengalaman: '7 tahun'
// }

// let artis = {
//   nama: 'Theo',
//   tahunLahir: '1990',
//   asal: 'Manado',
//   onGoingFilm: 'Avengers',
//   jumlahFilm: 3
// }

// function cetakanOrang(nama, tahunLahir, asal) {
//   return {
//    nama,
//    tahunLahir,
//    asal 
//   }
// }

// class Person {
//   constructor(paramNama, paramTahunLahir, paramAsal) {
//     this.nama = paramNama
//     this.tahunLahir = paramTahunLahir
//     this.asal = paramAsal
//   }
// }

// class Developer extends Person {
//   constructor(nama, tahunLahir, asal, specialty, pengalaman){
//     super(nama, tahunLahir, asal);
//     this.specialty = specialty
//     this.pengalaman = pengalaman
//   }
// }

// class Product {
//   constructor(name, price, stock) {
//     this.name = name
//     this.price = price
//     this.stock = stock
//     this.qty = 0
//   }
// }

// class Clothing extends Product {
//   constructor(name, price, stock, size){
//     super(name, price, stock)
//     this.size = size
//   }
// }

// let a = new Person('Doraemon', '1900', 'Sunda')
// let b = new Person('Theo', '2000', 'Purwadhika')
// let c = new Clothing('Kaos', 12000, 10, 'S')

// console.log(b)

// let arr = ['Jakarta', 'BSD', 'Bandung', 2]

// console.log(arr.indexOf('Jakarta'))

// console.log(arr[arr.indexOf('Jakarta')])

// function hapus (text) {
//   arr.splice(arr.indexOf(text), 1)
//   console.log(arr)
// }

// hapus('BSD')

// function angka () {
//   return 1
// }

// arr[arr[3]]


// function fibo(len) {

// }

function parkir (hour) {
  // if (hour <= 2) {
  //   return 2000 * hour 
  // }

  // return 2000 * 2 + ((hour - 2) * 500)

  let result = 0
  while (hour > 0) {
    if(hour <= 2) {
      result += 2000
    } else {
      result += 500
    }
    hour--
  }
  return result
}

function maxDiff (arr) {
  arr.sort(function(a, b) {
    return a - b
  })

  return arr[arr.length - 1] - arr[0]

  // return Math.max(...arr) - Math.min(...arr)
}

// console.log(maxDiff([5, 19, 3, 7, 12]))

