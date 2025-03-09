document.addEventListener("DOMContentLoaded", function () {
    
    // slider section ********************************************************
    $(".slider-inner-01").slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: false,
        dots: true,
        prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'cubic-bezier(.52 ,-0.01, .27, .99)',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    $(".slider-inner-02").slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: false,
        dots: true,
        prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'cubic-bezier(.52 ,-0.01, .27, .99)',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".slider-inner-03").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: 'cubic-bezier(.52 ,-0.01, .27, .99)',
    });

});
