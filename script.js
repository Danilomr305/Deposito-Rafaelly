function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

/*-------------------------------------*/

function clickMenu(){
    if (links.style.display == 'block') {   
        links.style.display = 'none'
    }else {
        links.style.display = 'block'
    }
}

/*-------------------------------------*/

const url = 'https://wa.me/5586995593816'
const btn = document.querySelector('#btn')

function openInNewTab(url) {
    const win = window.open(url, 'blank')
    win.focus()
}

btn.addEventListener('click', () => {
    openInNewTab(url)
})

/*-------------------------------------*/

const maps = 'https://www.google.com.br/maps/dir/-5.0409184,-42.7366021/Dep%C3%B3sito+Rafaelly+Agua+%26+G%C3%A1s+-+Av.+Maria+Antonieta+Burlamaqui,+5154+-+Santa+Lia,+Teresina+-+PI,+64058-720/@-5.0484906,-42.7552181,15z/data=!3m1!4b1!4m17!1m7!3m6!1s0x78e3ba97bf2b3c1:0xeddc5673d3f624c8!2sDep%C3%B3sito+Rafaelly+Agua+%26+G%C3%A1s!8m2!3d-5.0599469!4d-42.7543565!16s%2Fg%2F11f5550xnz!4m8!1m1!4e1!1m5!1m1!1s0x78e3ba97bf2b3c1:0xeddc5673d3f624c8!2m2!1d-42.7543565!2d-5.0599469?entry=ttu'
const rotas = document.querySelector('#rotas')

function openInNewTab(maps) {
    const win = window.open(maps, 'blank')
    win.focus()
}

rotas.addEventListener('click', () => {
    openInNewTab(maps)
})