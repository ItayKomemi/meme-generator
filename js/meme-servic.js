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
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}


function getMeme(){
    return gMeme
}

function setLineTxt(txt){
    gMeme.lines[0].txt = txt
    renderMeme()
    return gMeme
}

function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'green'
    gCtx.fillStyle = 'black'
    gCtx.font = '40px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
  
    gCtx.fillText(text, x, y) 
    gCtx.strokeText(text, x, y)
}

function setImg(imgId){
    gMeme.selectedImgId = imgId
}
