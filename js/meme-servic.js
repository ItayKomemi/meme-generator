'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

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
            align: 'left',
            color: 'red'
        },
        {
            txt: '',
            size: 30,
            align: 'right',
            color: 'red'
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
    gCtx.strokeStyle = ''
    gCtx.fillStyle = 'black'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    const { x, y } = checkIdx(idx)

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function changeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
    return gMeme
}

function handelFont(num) {
    gMeme.lines[gMeme.selectedLineIdx].size += num
    return gMeme
}

function switchLine() {

    if (gMeme.selectedLineIdx === 1) {
        gMeme.selectedLineIdx = 0
        return true
    }
    if (gMeme.selectedLineIdx === 0) {
        gMeme.selectedLineIdx = 1
        return false
    }
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
    }
}