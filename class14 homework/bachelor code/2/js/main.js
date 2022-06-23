const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', pickAndi)
document.querySelector('#claireNext').addEventListener('click', pickClaire)
document.querySelector('#sharleenNext').addEventListener('click', pickSharleen)

function pickAndi() {
 andi.classList.toggle('hidden')
 claire.classList.add('hidden')
 sharleen.classList.add('hidden')
}

function pickClaire() {
 andi.classList.add('hidden')
 claire.classList.toggle('hidden')
 sharleen.classList.add('hidden')
}

function pickSharleen() {
 andi.classList.add('hidden')
 claire.classList.add('hidden')
 sharleen.classList.toggle('hidden')
}