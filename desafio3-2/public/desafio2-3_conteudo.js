//https://rocketseat.com.br/gostack

const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')
const maxminIcon= document.querySelector('.modal-max-min')

for (let card of cards){
    card.addEventListener('click',function(){
        const pageID = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${pageID}`
    })
}

document.querySelector('.modal-close').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ""
})

maxminIcon.addEventListener('click', function(event){
    event.preventDefault();
    if(maxminIcon.querySelector('i').innerHTML=='maximize'){
        modal.classList.add('max')
        modalOverlay.querySelector('iframe').classList.add('max')
        maxminIcon.querySelector('i').innerHTML='minimize'
    }
    else {
        maxminIcon.querySelector('i').innerHTML='maximize'
        modal.classList.remove('max')
        modalOverlay.querySelector('iframe').classList.remove('max')
    }
})