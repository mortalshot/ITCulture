// mediaQueryMdMin = window.matchMedia('(min-width: 768px)');

// mediaQueryMdMin.addListener(handleTabletChange);
// function handleTabletChange(e) {
//     if (e.matches) {

//     }

//     else {

//     }
// }

// if (mediaQueryMdMin.matches) {

// }


mediaQueryMax880 = window.matchMedia('(max-width: 880px)');

if (mediaQueryMax880.matches) {
    $(".header__list .menu-item-has-children a").on("click", function (event) {
        $(this).toggleClass('active');
        $(this).next('.sub-menu').slideToggle(300);
    });
}