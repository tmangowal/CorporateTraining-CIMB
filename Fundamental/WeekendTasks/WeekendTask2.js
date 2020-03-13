
var letters = 'abcdefghijklmnopqrstuvsxyz'

const caesarCipher = (word, num) => {
    // Buat sebuah function yang menerima sebuah string S dan number N ( N >= 0 )
    // Output functionnya adalah sebuah string dengan setiap huruf
    // dari S bergeser sebanyak N posisi dalam urutan alphabet

    // Input: 'abc', 1
    // Output: 'bcd'

    // Input: 'abc', 28
    // Output: 'cde'

    // write your code here
    let splitWord = word.split('')
    let arrAlp = letters.split('')
    let hasil = ''

    for (let i = 0; i < splitWord.length; i++) {

      while (num > 26) {
        num -= 26
      }

      hasil += arrAlp[arrAlp.indexOf(splitWord[i]) + num]
    }

    return hasil
}
// console.log(caesarCipher('abc', 28))

const plusMinus = (numArr) => {
  // Buat sebuah function yang menerima sebuah array of numbers
  // Output functionnya adalah hasil dari setiap angka dari
  // array ditambah atau dikurang dengan index berikutnya secara bergantian.
  // Maaf penjelasannya gak jelas hehe

  // Input: [1,2,3,4]
  // Output: 1 + 2 - 3 + 4 = 4

  // Input: [1, 1, 1, 1, 1]
  // Output: 1 + 1 - 1 + 1 - 1 = 1

  let result = numArr[0]
  let operator = 'tambah'

  // for (let i = 1; i < numArr.length; i++) {
  //   if (operator == 'tambah') {
  //     result = result + numArr[i]
  //     operator = 'kurang'
  //   } else if (operator == 'kurang') {
  //     result = result - numArr[i]
  //     operator = 'tambah'
  //   }
  // }

  for (let i = 1; i < numArr.length; i++) {
    if (i % 2 !== 0) {
      result = result + numArr[i]
    } else if (i % 2 == 0) {
      result = result - numArr[i]
    }
  }

  return result
}

// console.log(plusMinus([1,2,3,4]))

const isPalindrome = (word) => {
  // Buat sebuah function yang menerima sebuah string
  // Function ini akan mengecek apakah string ini sebuah palindrome
  
  // Sebuah palindrome adalah sebuah kata atau kalimat yang jika dibalik,
  // akan memiliki urutan huruf yang sama dengan kata atau kalimat aslinya

  // Return true jika kata atau kalimat tersebut sebuah palindrome
  // return false sebaliknya

  // Function harus case insensitive


  // Input: 'madam'
  // Output: true

  // Input: 'Racecar'
  // Output: true

  // Input: '123321'
  // Output: true

  // Input: 'NuRsES ruN'
  // Output: true

  // Input: 'hehe kocak'
  // Output: false

  return word.toLowerCase().replace(/\s/gi, '').split('').reverse().join('') == word.toLowerCase().replace(/\s/gi, '')
}


mumble = (word) => {
  var arr = word.split('')
  var newArr = []

  for(var i = 0; i < word.length; i++){
      var upCase = arr[i].toUpperCase()
      newArr.push(upCase)
      for(k = 0; k < i; k++){
          newArr.push(arr[i].toLowerCase())
      }
      if(i == word.length - 1){
          break;
      }
      newArr.push('-')
  }
  return newArr.join('')
}





console.log(mumble('hello'))