$('.reviews__slider').slick({
    arrows: true,
    slidesToShow: 2,
    variableWidth: true,
    infinite: false,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="icon-chevron-right"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="icon-chevron-right"></i></button>',
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                variableWidth: false,
                arrows: false,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                arrows: true,
                centerMode: true,
                variableWidth: true,
                dots: false,
                infinite: true,
            }
        },
    ]
});

$('.cases__slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="icon-chevron-right"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="icon-chevron-right"></i></button>',
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
                centerMode: false,
                initialSlide: 0,
            }
        },
        // {
        //     breakpoint: 575,
        //     settings: {
        //         slidesToShow: 1,
        //         arrows: true,
        //         centerMode: true,
        //         variableWidth: true,
        //         dots: false,
        //         infinite: true,
        //     }
        // },
    ]
});