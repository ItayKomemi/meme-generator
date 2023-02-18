'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

var gImgs = [
    { id: 1, url: 'meme-imgs/1.jpg', keywords: ['funny', 'man'] },
    { id: 2, url: 'meme-imgs/2.jpg', keywords: ['cute', 'puppy'] },
    { id: 3, url: 'meme-imgs/3.jpg', keywords: ['sleepy', 'baby'] },
    { id: 4, url: 'meme-imgs/4.jpg', keywords: ['sleepy', 'cat'] },
    { id: 5, url: 'meme-imgs/5.jpg', keywords: ['cute', 'baby'] },
    { id: 6, url: 'meme-imgs/6.jpg', keywords: ['actor', 'man'] },
    { id: 7, url: 'meme-imgs/7.jpg', keywords: ['funny', 'baby'] },
    { id: 8, url: 'meme-imgs/8.jpg', keywords: ['funny', 'man'] },
    { id: 9, url: 'meme-imgs/9.jpg', keywords: ['funny', 'baby'] },
    { id: 10, url: 'meme-imgs/10.jpg', keywords: ['funny', 'man'] },
    { id: 11, url: 'meme-imgs/11.jpg', keywords: ['fighting', 'man'] },
    { id: 12, url: 'meme-imgs/12.jpg', keywords: ['actor', 'man'] },
    { id: 13, url: 'meme-imgs/13.jpg', keywords: ['actor', 'man'] },
    { id: 14, url: 'meme-imgs/14.jpg', keywords: ['actor', 'man'] },
    { id: 15, url: 'meme-imgs/15.jpg', keywords: ['actor', 'man'] },
];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 30,
            align: 'center',
            color: 'black',
            font: 'Impact',
        },
        {
            txt: '',
            size: 30,
            align: 'center',
            color: 'black',
            font: 'Impact',
        },
        {
            txt: '',
            size: 30,
            align: 'center',
            color: 'black',
            font: 'Impact',
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
    gCtx.font = `${gMeme.lines[idx].size}px ${gMeme.lines[idx].font}`
    gCtx.textAlign = gMeme.lines[idx].align

    const { x, y } = checkIdx(idx)

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
    if (gMeme.selectedLineIdx === idx && text) drawRect(x, y, text)
}

function drawRect(x, y, txt) {
    let width = gCtx.measureText(txt).width
    gCtx.strokeStyle = 'black'
    gCtx.strokeRect(x - width / 2, y - 20, width, 40)
    gCtx.fillStyle = ''
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function changeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
    gCtx.strokeStyle = color

    return gMeme
}

function handelFont(num, font = 'Impact') {
    gMeme.lines[gMeme.selectedLineIdx].size += num
    gMeme.lines[gMeme.selectedLineIdx].font = font

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
        color: 'black',
        font: 'Impact',
    },)
}

function checkIdx(idx) {

    switch (idx) {
        case 0:
            return { x: 230, y: 50 }
        case 1:
            return { x: 230, y: 250 }
        case 2:
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

function deleteLine() {
    gMeme.lines.splice(gMeme.lines[gMeme.selectedLineIdx], 1)
}

function getRandomTxt() {
    const strList = [
        'one does not simply',
        'whattttttttttt',
        'there you go',
        'Say what?',
        'alooooooooooo'
    ]

    const str = strList[Math.floor(Math.random() * strList.length)]

    return str
}

function getRandomTxtSize() {
    const txtSize = getRandomInt(10, 40)
    return txtSize
}

function getRandomLine() {
    const line = getRandomInt(0, 1)
    return line
}
function getRandomImg() {
    const img = getRandomInt(1, 15)
    return img
}

function renderRandomMeme(line, lineTxt, txtSize, color, img) {
    gMeme.selectedLineIdx = line
    gMeme.lines[gMeme.selectedLineIdx].txt = lineTxt
    gMeme.lines[gMeme.selectedLineIdx].size = txtSize
    gMeme.lines[gMeme.selectedLineIdx].color = color
    gMeme.selectedImgId = img

    return gMeme
}

function setSticker(emoji) {
    gMeme.lines[gMeme.selectedLineIdx].txt += emoji

    return gMeme
}

function searchParams(param) {
    let filtered = []

    gImgs.filter(img => {
        for (var i = 0; i < 2; i++) {
            if (img.keywords[i] === param) filtered.push(img)
        }
    })
    return filtered
}