const mobileMenu = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navClose = document.querySelector('.close');
const dropdownMenu = document.querySelector('#menu');
const dropdownUl = document.querySelector
const main = document.querySelector('main');


mobileMenu.addEventListener('click', (e) => {
    nav.classList.add('flipVisibility');
    mobileMenu.style.display = 'block';

    const bg = document.createElement('div');
    bg.setAttribute('id', 'fader');
    bg.style.backgroundColor = 'black';
    bg.style.opacity = '0.8';
    bg.style.zIndex = '5';
    bg.style.width = '100vw';
    bg.style.height = '100vh';
    bg.style.position = 'absolute';
    bg.style.top = '0';
    bg.style.left = '0';
    main.appendChild(bg);

});

navClose.addEventListener('click', (e) => {
    nav.classList.remove('flipVisibility');
    const del = document.querySelector('#fader');
    main.removeChild(del);
});

dropdownMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('features')) {
        const showUl = document.querySelector('ul.features');
        showUl.classList.toggle('flipVisibility');
    }
    if (e.target.classList.contains('company')) {
        const showUl = document.querySelector('ul.company');
        showUl.classList.toggle('flipVisibility');
    }
})