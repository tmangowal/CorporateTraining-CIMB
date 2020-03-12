let a = {
  tahun: "1234",
  nama: "asdasd",
  kata: 'kontak'
};

class Item {
  constructor(a, b){
    this.name = a
    this.price = b
  }
}

let b = { tahun: "1234", nama: "asdasd", bulan: "Jan" };

let c = {
  nama: 'asd',
  kontak: {
    email: 'email@mail.com',
    hp: '123455678'
  }
}

let d = new Item ('Jeruk', 12000)

let nama = 'kontak'

c[nama] // variable
c.nama // property

let arr = [
  new Item ('Jeruk', 12000),
  new Item ('Apel', 2000)
]

let cart = []

const add = (idx) => {
  let newItem = {
    ...arr[idx],
    qty: 0
  }

  cart.push(newItem)
}

add(1)

console.log(cart);
