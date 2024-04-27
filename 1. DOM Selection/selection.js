//get element by id
const judul = document.getElementById('judul')
console.log(judul)

//by class -> ini hasilnya bakal array, karna class bisa banyak
const paragraf1 = document.getElementsByClassName('p1')
console.log(paragraf1)

// tag name -> mengambil berdasarkan nama tag html nya -> ini array juga
const ul = document.getElementsByTagName('ul')
console.log(ul)
const paragraf = document.getElementsByTagName('p')
console.log(paragraf)

//css selector
const p1 = document.querySelector('.p1')
console.log(p1)

const p1All = document.querySelectorAll('.p1')
console.log(p1All)