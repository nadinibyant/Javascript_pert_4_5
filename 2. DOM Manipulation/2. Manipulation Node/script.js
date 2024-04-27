// manipulation node ini lebih kaya melakukan create dan delete tag yang diinginkan 

// createElement()-> ini untuk menambah tag baru pada html
//misal mau menambahkan element h1 setelah p3
const h1Baru = document.createElement('h1')

// createTextNode () -> untuk menambahkan teks pada element yang ingin kita tambahkan
const teksH1 = document.createTextNode('Halo Selamat Datang di Study Jam Front End')

//appenChild() -> menyisipkan element yang diinginkan setelah target element
const p3 = document.getElementById('p3')
p3.appendChild(h1Baru)
h1Baru.appendChild(teksH1)
