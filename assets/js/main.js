const navToggleElement = document.getElementById('nav-toggle');
const navElement = document.getElementById('nav');

navToggleElement.addEventListener('click', ()=>{
    navElement.classList.toggle('nav--visible');
});