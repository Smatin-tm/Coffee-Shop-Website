'use strict';


let main = document.querySelector('.main');
console.log(main);
let hamburger = document.querySelector('.fa-bars');
let close = document.querySelector('.fa-x');

let clickBars = document.querySelector('.bars');

let outSideNav = document.querySelector('.outside-nav');



hamburger.addEventListener('click', ()=>{
    main.classList.add('active-menu');
    clickBars.classList.add('rotate-bars');
    outSideNav.classList.add('active-point');
    close.classList.add('rotate-close')
    
})
close.addEventListener('click', ()=>{
    main.classList.remove('active-menu');
    clickBars.classList.remove('rotate-bars');
    outSideNav.classList.remove('active-point');
})