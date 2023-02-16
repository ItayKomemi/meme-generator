'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
let gFont = 'Impact'

var gImgs = [
    { id: 1, url: 'meme-imgs/1.jpg', keywords: ['donald', 'duck'] },
    { id: 2, url: 'meme-imgs/2.jpg', keywords: ['funny', 'cat'] },
    { id: 3, url: 'meme-imgs/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'meme-imgs/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'meme-imgs/5.jpg', keywords: ['funny', 'cat'] },
    { id: 6, url: 'meme-imgs/6.jpg', keywords: ['funny', 'cat'] },
    { id: 7, url: 'meme-imgs/7.jpg', keywords: ['funny', 'cat'] },
    { id: 8, url: 'meme-imgs/8.jpg', keywords: ['funny', 'cat'] },
    { id: 9, url: 'meme-imgs/9.jpg', keywords: ['funny', 'cat'] },
    { id: 10, url: 'meme-imgs/10.jpg', keywords: ['funny', 'cat'] },
    { id: 11, url: 'meme-imgs/11.jpg', keywords: ['funny', 'cat'] },
    { id: 12, url: 'meme-imgs/12.jpg', keywords: ['funny', 'cat'] },
    { id: 13, url: 'meme-imgs/13.jpg', keywords: ['funny', 'cat'] },
    { id: 14, url: 'meme-imgs/14.jpg', keywords: ['funny', 'cat'] },
    { id: 15, url: 'meme-imgs/15.jpg', keywords: ['funny', 'cat'] },
];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 30,
            align: 'center',
            color: 'black'
        },
        {
            txt: '',
            size: 30,
            align: 'center',
            color: 'black'
        },
    ]
}


function getMeme() {
    return gMeme
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
    return gMeme
}

function drawText(text, idx) {

    gCtx.lineWidth = 2
    gCtx.strokeStyle = gMeme.lines[idx].color
    gCtx.fillStyle = 'white'
    gCtx.textBaseline = 'middle'
    gCtx.font = `${gMeme.lines[idx].size}px ${gFont}`
    gCtx.textAlign = gMeme.lines[idx].align
    

    const { x, y } = checkIdx(idx)

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function changeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
    gCtx.strokeStyle = color

    return gMeme
}

function handelFont(num, font) {
    gMeme.lines[gMeme.selectedLineIdx].size += num
    gFont = font
    return gMeme
}

function switchLine() {

    if (gMeme.selectedLineIdx === gMeme.lines.length) gMeme.selectedLineIdx = 0
    else gMeme.selectedLineIdx++
}

function addLine() {
    return gMeme.lines.push({
        txt: '',
        size: 30,
        align: 'center',
        color: 'red'
    },)
}

function checkIdx(idx) {

    switch (idx) {
        case 0:
            return { x: 230, y: 50 }
        case 1:
            return { x: 230, y: 400 }

        default:
            return { x: 230, y: 200 }
    }
}

function setAlign(letter) {

    if (letter === 'L') gMeme.lines[gMeme.selectedLineIdx].align = 'left'
    else if (letter === 'C') gMeme.lines[gMeme.selectedLineIdx].align = 'center'
    else if (letter === 'R') gMeme.lines[gMeme.selectedLineIdx].align = 'right'
    return gMeme
}

function deleteLine(){
    gMeme.lines[gMeme.selectedLineIdx].txt = ''
}