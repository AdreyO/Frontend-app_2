document.addEventListener('DOMContentLoaded', function(){

    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu');
    const body = document.querySelector('body');
    const header = document.querySelector('.header');

    burger.addEventListener('click',() => {
        burger.classList.toggle('active')
        menu.classList.toggle('active')
        body.classList.toggle('lock')
        if(header.classList.contains('header_scroll')){
            header.classList.toggle('header_scroll');
        }
    })
})

window.addEventListener('scroll', function() {

    const header = document.querySelector('.header');
    if (window.pageYOffset > 10) {header.classList.add('header_scroll');}
    else {header.classList.remove('header_scroll');}
});

let scroll = document.querySelector('#scroll');

scroll.addEventListener('click',() => {
    const attractions = document.querySelector('#attractions');
    attractions.scrollIntoView({behavior: "smooth"});
});