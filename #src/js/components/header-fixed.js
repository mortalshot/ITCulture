mediaQueryHeader = window.matchMedia('(min-width: 881px)');

mediaQueryHeader.addListener(handleTabletChange);
function handleTabletChange(e) {
    if (e.matches) {
        const navOffset = $('.site__header .header__bottom').offset().top;
        $(window).scroll(function () {
            const scrolled = $(this).scrollTop();

            if (scrolled > navOffset) {
                $('.site__wrap').addClass('nav-fixed');
            } else if (scrolled < navOffset) {
                $('.site__wrap').removeClass('nav-fixed');
            }
        });
    }
}

if (mediaQueryHeader.matches) {
    const navOffset = $('.site__header .header__bottom').offset().top;
    $(window).scroll(function () {
        const scrolled = $(this).scrollTop();

        if (scrolled > navOffset) {
            $('.site__wrap').addClass('nav-fixed');
        } else if (scrolled < navOffset) {
            $('.site__wrap').removeClass('nav-fixed');
        }
    });
}