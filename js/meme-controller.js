'use strict'

let gElCanvas
let gCtx

function onInit(){
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')

    renderMeme()
    renderGallery()
}

function renderMeme(){
    const meme = getMeme()
    const txt = meme.lines[0].txt
    const img = new Image()

    img.src = `meme-imgs (square)/${meme.selectedImgId}.jpg`

    img.onload = () => {
        gCtx.drawImage(img,0,0,gElCanvas.width,gElCanvas.height)
        if(!txt) return
        img.innerText = drawText(txt, 230, 50)
    }
}

function onImgSelect(imgId){
    setImg(imgId)
    renderMeme()
}