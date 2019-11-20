// navigation fixed top function
$(document).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    if (scrollTop >= 20) {
        $('header').css({ background: 'lightgreen', padding: '0' });
        $('header').addClass('fixedTop');
        $('.note').css({ paddingTop: '100px' });
    } else {
        $('header').css({ background: 'transparent', padding: '10px 0' });
        $('header').removeClass('fixedTop');
        $('.note').css({ paddingTop: '0' });
    }
});
// fullHeight function
var fullHeight = function () {

    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
        $('.js-fullheight').css('height', $(window).height());
    });

};
fullHeight();
// scollax.js
$.Scrollax();
// owlCarousel slider
var carousel = function () {
    $('.home-slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: false,
        autoplayHoverPause: false,
        items: 1,
        navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
};
carousel();
// owlCarousel slider for logo-area section
function clients_slider() { 
    if ($('.clients_slider').length) { 
        $('.clients_slider').owlCarousel({ 
            loop: true, 
            margin: 30, 
            items: 5, 
            nav: false, 
            autoplay: true, 
            smartSpeed: 1500, 
            dots: false, 
            responsiveClass: true, 
            responsive: { 
                0: { items: 1, }, 
                400: { items: 2, }, 
                575: { items: 3, }, 
                768: { items: 4, }, 
                992: { items: 5, } 
            } 
        }) 
    } 
}
clients_slider();

// men page
(function($){
    var proCata=$('.amado-pro-catagory');
    var singleProCata=".single-products-catagory";
    if($.fn.imagesLoaded){
        proCata.imagesLoaded(function(){
            proCata.isotope({
                itemSelector:singleProCata,
                percentPosition:true,
                masonry:{
                    columnWidth:singleProCata
                }
            });
        });
    }
});