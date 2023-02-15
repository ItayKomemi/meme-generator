'use strict'

function renderGallery() {
    const strHTMLs = gImgs.map(
      (img, idx) =>
        `<img src="meme-imgs (square)/${idx + 1}.jpg" onclick="onImgSelect(${img.id})" />`
    )
    document.querySelector('.gallery-container').innerHTML = strHTMLs.join('')
  }