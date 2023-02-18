'use strict'

function renderGallery(images = gImgs) {
  let strHTMLs = images.map(
    img =>
      `<img class="img-gallery" src="meme-imgs (square)/${img.id}.jpg" onclick="onImgSelect(${img.id})" />`
  )
  document.querySelector('.gallery-container').innerHTML = strHTMLs.join('')
}

function handelMemesWhenSearched(){
  const elParamInput = document.querySelector('input[name="params"]')

  if(elParamInput.value === '') renderGallery()
}