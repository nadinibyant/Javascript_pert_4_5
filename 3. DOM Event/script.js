const btnClick = document.getElementById('btnClick')

//mouseenter
btnClick.addEventListener('mouseenter', function () {
    btnClick.style.backgroundColor = 'red'
})

//mouseleave
btnClick.addEventListener('mouseleave', function() {
    btnClick.style.backgroundColor = 'white'
})

//click 
btnClick.addEventListener('click', function() {
    const createH1 = document.createElement('h1')
    const teksH1 = document.createTextNode('Button Sudah Di Klik!!!!!')
    const p3 = document.getElementById('p3')
    p3.appendChild(createH1)
    createH1.appendChild(teksH1)
})

//submit
const form = document.querySelector('form')
form.addEventListener('submit', function () {
    const valueUsername = document.getElementById('username').value
    const valuePassword = document.getElementById('password').value
    alert(`value username : ${valueUsername}`)
    alert(`value password : ${valuePassword}`)
})