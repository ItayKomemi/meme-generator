'use strict'

let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')

    renderGallery()
}

function renderMeme() {

    const meme = getMeme()
    const img = new Image()

    img.src = `meme-imgs (square)/${meme.selectedImgId}.jpg`

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)

        meme.lines.forEach((line, idx) => {
            drawText(line.txt, idx)
        })
    }
}

function onImgSelect(imgId) {
    setImg(imgId)

    onToggelContent('Memes')

    renderMeme()
}


function onChooseColor(color) {
    changeColor(color)


    renderMeme()
}

function onHandelFont(num = gMeme.lines[0].size, font) {
    handelFont(num, font)

    renderMeme()
}

function onSwitchLine() {
    switchLine()

    clearLine()

    renderMeme()
}

function onSetLineTxt(txt) {
    setLineTxt(txt)

    renderMeme()
}

function onAddLine() {
    addLine()

    renderMeme()
}

function onToggelContent(aTag) {
    const elMain = document.querySelector('.button-canvas-container')
    const elGallery = document.querySelector('.gallery-container')
    const elFlexDiv = document.querySelector('.input-flex-container')
    const elSearchParam = document.querySelector('.input-params')

    if (aTag.innerText === 'Gallery' || aTag === 'Gallery') {

        elMain.classList.add('hidden')
        elGallery.classList.remove('hidden')
        elFlexDiv.classList.remove('hidden')
        elSearchParam.classList.remove('hidden')
    }
    if (aTag.innerText === 'Memes' || aTag === 'Memes') {

        elMain.classList.remove('hidden')
        elGallery.classList.add('hidden')
        elFlexDiv.classList.add('hidden')
        elSearchParam.classList.add('hidden')
    }


}

function onSetAlign(letter) {
    setAlign(letter)

    renderMeme()
}

function onDeleteLine() {
    deleteLine()

    renderMeme()
}

function clearLine() {
    const elLine = document.querySelector('input[name="text-line"]')
    elLine.value = ''
}

function onFlexMeme() {

    const line = getRandomLine()
    const lineTxt = getRandomTxt()
    const txtSize = getRandomTxtSize()
    const color = getRandomColor()
    const img = getRandomImg()

    renderRandomMeme(line, lineTxt, txtSize, color, img)

    onToggelContent('Memes')

    renderMeme()
}

function onSetSticker(emoji) {
    setSticker(emoji.innerText)

    renderMeme()
}

function onSearchParams(params) {

    const imges = searchParams(params)
    renderGallery(imges)

    handelMemesWhenSearched()
}

function onToggelBurgerNav() {
    var elNav = document.getElementById('my-links')
    
    if (elNav.style.display === 'none') elNav.style.display = 'block'
    else elNav.style.display = 'none'

}

function onHandelModal(param){
    const elModal = document.querySelector('div')
    
    if(param === 'open') elModal.classList.remove('hidden')
    else if(param === 'close') elModal.classList.add('hidden')

}