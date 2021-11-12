$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active')
        $('body').toggleClass('lock');
        if($('#header').hasClass('header_scroll')){
            $('.header').removeClass('header_scroll');
        }
        else{
            $('.header').addClass('header_scroll');
        }
    })
})

$(window).scroll(function(){
    if ($(window).scrollTop() > 10) {
        $('.header').addClass('header_scroll');
    }
    else {
        $('.header').removeClass('header_scroll')
    }
});

$(document).ready(function ($) {
    $('#scroll').click(function (e) {e.preventDefault();
        $('html, body').animate({scrollTop: $("#down").position().top}, 2000);
    });
});



