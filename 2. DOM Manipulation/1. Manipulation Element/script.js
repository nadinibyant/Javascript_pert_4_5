//manipulation element ni : memanipulasi terhadp tag tersebut

//inner html
const p2 = document.getElementById('p2')
p2.innerHTML = '<b>Ini adalah DOM Manipulation menggunakan Inner HTML</b>'

//set attribute
const instagram = document.getElementById('instagram')
instagram.setAttribute('href', 'http://instagram.com/dinibynt')

//get attribut 
const id_paragraf = document.getElementById('paragraf3')
const getData = id_paragraf.getAttribute('id_paragraf')
console.log(getData)

//remove attribut
const p1 = document.getElementById('p1')
p1.removeAttribute('id_paragraf') //langusng inspect elemetn p1 ni

//classlist
//classlist add
p1.classList.add('class', 'iniClassKedua') //nulis nama class nya tidak boleh menggunakan spasi

//classlist remove
p1.classList.remove('iniClassKedua')

//classlist toogle 
// ini untuk mengecek apakah nama class yang kita tuliskan itu ada atau ga, jika ada hapus class tersebut, jika tidak ada tambahkan class tersebut
p1.classList.toggle('ada') // tes ini dulu pertama
p1.classList.toggle('ada') // baru tes ini


//classlist containt
// -> ini mengecek apakah nama class yang kita tuliskan itu ada atau ga, jika ada maka akan menghasilkan nilai true, jika tidak ada akan menghasilkan nilai false
const cekAda = p1.classList.contains('ada')
console.log(cekAda) //false

const cekClass = p1.classList.contains('class')
console.log(cekClass) // true


//manipulation css (selalu pake .style)
// ubah warna p1
p1.style.color = 'red'

//fontsize
p1.style.fontSize = '90px'

//banyakk bisa cek di w3school style css manipulation dom
