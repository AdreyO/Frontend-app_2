document.addEventListener('DOMContentLoaded', function(){

    let burger = document.querySelector('.header__burger');
    let menu = document.querySelector('.header__menu');
    let body = document.querySelector('body');
    let header = document.querySelector('.header');

    burger.addEventListener('click',() => {
        burger.classList.toggle('active')
        menu.classList.toggle('active')
        body.classList.toggle('lock')
        if(header.classList.contains('header_scroll')){
            header.classList.remove('header_scroll');
        }
        else{
            header.classList.add('header_scroll');
        }
    })
})

window.addEventListener('scroll', function() {

    let header = document.querySelector('.header');
    if (window.pageYOffset > 10) {header.classList.add('header_scroll');}
    else {header.classList.remove('header_scroll');}
});

let scroll = document.querySelector('#scroll');

scroll.addEventListener('click',() => {
    let attractions = document.querySelector('#attractions');
    attractions.scrollIntoView({behavior: "smooth"});
});