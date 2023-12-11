const hamburger = document.getElementById('toggle-nav')
const nava = document.getElementbyId('nav ul')

hamburger.addEventListener('click', () =>{
    nava.classList.toggle('show')
})