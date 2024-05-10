function sortear() {
    // var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var dado = (Math.floor(Math.random() * 6) + 1)
    
    // msg.innerHTML = `Número sorteado foi ${dado}`
    if (dado == 1 ) {
        img.src = 'dado1.png'
    } else if (dado == 2) {
        img.src = 'dado2.png'
    } else if (dado == 3) {
        img.src = 'dado3.png'
    } else if (dado == 4) {
        img.src = 'dado4.png'
    } else if (dado == 5) {
        img.src = 'dado5.png'
    } else {
        img.src = 'dado6.png'
    }
}