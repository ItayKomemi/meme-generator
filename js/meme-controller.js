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

    if (aTag.innerText === 'Gallery') {
        const elMain = document.querySelector('.button-canvas-container')
        elMain.classList.add('hidden')

        const elGallery = document.querySelector('.gallery-container')
        elGallery.classList.remove('hidden')
    }
    if (aTag.innerText === 'Memes' || aTag === 'Memes') {
        const elMain = document.querySelector('.button-canvas-container')
        elMain.classList.remove('hidden')

        const elGallery = document.querySelector('.gallery-container')
        elGallery.classList.add('hidden')
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