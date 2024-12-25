$(document).ready(function(){
    $('.features-slider .owl-carousel').owlCarousel({
        loop:true,
        margin:9, 
        dots: false,
        autoplay: false,         // Enables autoplay
        autoplayTimeout: 3000,  // Delay between transitions (in milliseconds)
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
                dots: true, 
            },
            576:{
                items:2
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:3,
            }
        }
    })
  
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
        $('.fixed-header').addClass('is-fixed visible-title');
    } else {
        $('.fixed-header').removeClass('is-fixed visible-title');
    }
});
$(window).scroll(function () {
    if ($(window).scrollTop() >= 1400) {
        $('.web-page-tabs').addClass('web-page-tabs-fixed visible-title');
    } else {
        $('.web-page-tabs').removeClass('web-page-tabs-fixed visible-title');
    }
});
