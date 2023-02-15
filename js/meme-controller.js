'use strict'

let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')

    // renderMeme()
    renderGallery()
}

function renderMeme() {
    const meme = getMeme()
    const img = new Image()
    const elGallery = document.querySelector('.gallery-container')
    gCtx.font = `${meme.lines[meme.selectedLineIdx].size}px Ariel`
    
    img.src = `meme-imgs (square)/${meme.selectedImgId}.jpg`
    elGallery.classList.add('hidden')

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)


        meme.lines.forEach((line,idx) => {

            drawText(line.txt,idx)
        })
    }
}

function onImgSelect(imgId) {
    setImg(imgId)
    renderMeme()
}


function onChooseColor(color) {
    changeColor(color)

    gCtx.strokeStyle = color

    renderMeme()
}

function onHandelFont(num) {
    handelFont(num)

    gCtx.font = `${gMeme.lines[gMeme.selectedLineIdx].size}px Ariel`

    renderMeme()
}

function onSwitchLine() {
    switchLine()
    
    renderMeme()
}

function onSetLineTxt(txt) {
    setLineTxt(txt)

    renderMeme()
}

function onAddLine(){
    addLine()
}