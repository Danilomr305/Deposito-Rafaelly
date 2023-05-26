function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

function clickMenu(){
    if (links.style.display == 'block') {   
        links.style.display = 'none'
    }else {
        links.style.display = 'block'
    }
}