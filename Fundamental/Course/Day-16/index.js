

let a = {
  nama: 'Nama',
  tahun: '2020',
  pekerjaan: 'Developer'
}

let b = {
  ...a,
  pekerjaan: 'CTO'
}

// let b = {
//   nama: 'Nama',
//   tahun: '2020',
//   pekerjaan: 'Developer',
//   department: 'IT'
// }

a.umur = '30'

// console.log(b)

let arr1 = [
  'Naruto',
  'Doraemon',
]

let arr2 = [
  2000,
  3000
]

// ['Naruto', 'Doraemon', 2000, 3000]

let arr3 = [
  ...arr1,
  // 'Naruto',
  // 'Doraemon',

  ...arr2,
  'tambah dong'
  // 2000,
  // 3000
]

// console.log(arr3)

// let a = {
//   username: 'theo',
//   email: 'thedevmango@gmail.com',
//   password: 'password123'
// }

let defaultVal = {
  username: '',
  email: '',
  password: ''
}

const onChangeText = (key, value) => {
  defaultVal = {
    ...defaultVal,
    [key]: value
  }
}

onChangeText('fullName', 'theo')

let testing = 'foo'

defaultVal[testing] = 'laalala'

console.log(defaultVal)

// [
//   [ 1 ],
//   [ 1, 2 ],
//   [ 1, 2, 3 ],
//   [ 1, 2, 3, 4 ],
//   [ 1, 2, 3, 4, 5 ],
//   [ 1, 2, 3, 4, 5, 6 ]
// ]


const triangleArray = (len) => {
  let hasil = []
  for (let i = 0; i < len; i++) {
    hasil[i] = []
    for (let j = 0; j <= i; j++) {

    }
  }

  return hasil
}

// [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]

// [
//   [ 1 ],
//   [ 3, 5 ],
//   [ 7, 9, 11 ],
//   [ 13, 15, 17, 19 ],
//   [ 21, 23, 25, 27, 29 ]
// ]

// [
//   [ 0 ],
//   [ 1, 1 ],
//   [ 2, 3, 5 ],
//   [ 8, 13, 21, 34 ],
//   [ 55, 89, 144, 233, 377 ]
// ]

// [
//   [ 1 ],
//   [ 1, 1 ],
//   [ 1, 2, 1 ],
//   [ 1, 3, 3, 1 ],
//   [ 1, 4, 6, 4, 1 ],
//   [ 1, 5, 10, 10, 5, 1 ]
// ]