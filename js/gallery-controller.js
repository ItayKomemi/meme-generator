'use strict'

function renderGallery() {
  let strHTMLs = gImgs.map(
    (img, idx) =>
      `<img class="img-gallery" src="meme-imgs (square)/${idx + 1}.jpg" onclick="onImgSelect(${img.id})" />`
  )
  document.querySelector('.gallery-container').innerHTML = strHTMLs.join('')
}