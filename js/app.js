function open_menu() {
    console.log("menu open")
}

$(window).scroll(function(){
    if ($(window).scrollTop() > 10) {
        $('.box_menu').addClass('scroll_menu');
    }
    else {
        $('.box_menu').removeClass('scroll_menu')
    }
});




$(window).scroll(function(){
    if ($(window).scrollTop() > 500) {
        $('#scroll').click(function(){
            $('html, body').animate({scrollTop:$('.title_welcome').position().top}, 700);
            console.log("up")
        });
    }
    else {
        $('#scroll').click(function(){
            $('html, body').animate({scrollTop:$('#down').position().top}, 5000);
            console.log("down")
        });

    }
});

$(window).scroll(function(){
    if ($(window).scrollTop() > 500) {
        $('.btn_scroll').addClass('down');
    }
    else {
        $('.btn_scroll').removeClass('down')
    }
});

