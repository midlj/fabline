// slick slider
$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY < 200) {
            $('#header').addClass("hide");
        } else {
            $('#header').removeClass("hide");
        }
    })
       
    // slick slider
    $('.multiple-items').slick({
        centerMode: true,
        centerPadding: '30px',
        autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 3,
        prevArrow: "<div class='arrow control-c prev slick-prev'><i class='fa fa-arrow-left' aria-hidden='true'></i></div>",
        nextArrow: "<div class='arrow control-c prev slick-next'><i class='fa fa-arrow-right' aria-hidden='true'></i></div>",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    centerMode: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });
});
