// slick slider
$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 200) {
            $('#header').addClass("header-primary");
        } else {
            $('#header').removeClass("header-primary");
        }
    });
       
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
    // navigat from home page to product page
    $('.item-1').on("click",function(){
        window.location.replace("../products.html")
    });
    });

$('.carousel').bind('slide.bs.carousel', function (e) {
    console.log(e.from);
    if(e.from==0){
        $('#header').removeClass("header-1");
        $('#header').addClass("header-2");
    }
    if(e.from==1){
        $('#header').removeClass("header-2");
        $('#header').addClass("header-3");
    }
    if(e.from==3){
        $('#header').removeClass("header-3");
        $('#header').addClass("header-1");
    }

});

