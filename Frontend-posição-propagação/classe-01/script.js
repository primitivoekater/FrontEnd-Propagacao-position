const visibilidade = document.querySelector('img')
const senha = document.querySelector('.date')
let password = true
visibilidade.addEventListener('click', function (event) {
    visibilidade.src = "./assets/olho-aberto.svg"
    if (password) {
        senha.setAttribute('type', 'text')
    } else {
        senha.setAttribute('type', 'password')
        visibilidade.src = "./assets/olho-fechado.svg"
    }
    password = !password


})