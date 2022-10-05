const galeria = document.querySelectorAll('.img-container img');
const imgModal = document.querySelector('.modal img')
const modal = document.querySelector('.modal')

function abrirModal(src) {
    modal.style.display = 'flex'
    imgModal.src = src;
}

galeria.forEach(function (imagem) {
    imagem.addEventListener('click', function (event) {
        abrirModal(event.target.src)
    })
})

modal.addEventListener('click', function () {
    modal.style.display = 'none'
})