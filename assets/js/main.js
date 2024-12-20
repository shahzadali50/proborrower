$(document).ready(function(){
    $('.features-slider .owl-carousel').owlCarousel({
        loop:true,
        margin:9, 
        dots: false,
        autoplay: false,         // Enables autoplay
        autoplayTimeout: 2000,  // Delay between transitions (in milliseconds)
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