function mudarCorMenu(cor) {
    document.getElementById('menu').classList.remove('bg-warning')
    document.getElementById('menu').style.background = cor
}

function mudarCorCard(cor) {
    Array.from(document.getElementsByClassName('card')).forEach(e => e.style.background = cor)
}

function mudarCorTexto(cor) {
    Array.from(document.getElementsByClassName('card')).forEach(e => e.style.color = cor)
}

function mudarFundo() {
    var cor = document.getElementById('color').value
    document.getElementsByTagName('body')[0].style.background = cor
}