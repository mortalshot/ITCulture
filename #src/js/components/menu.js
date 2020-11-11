$('.header__burger').click(function (event) {
    $('.header__burger, .header__bottom').toggleClass('active');
    $('body').toggleClass('lock');
})