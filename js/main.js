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
(function ($) {
    var proCata = $('.amado-pro-catagory');
    var singleProCata = ".single-products-catagory";
    if ($.fn.imagesLoaded) {
        proCata.imagesLoaded(function () {
            proCata.isotope({
                itemSelector: singleProCata,
                percentPosition: true,
                masonry: {
                    columnWidth: singleProCata
                }
            });
        });
    }
});

// dynamic form
// var formBtn = document.querySelectorAll('.linkBtn');
// console.log(formBtn);
// $(formBtn).click(function () {
//     $("div#form1").css({
//         'width':'250px',
//         'height':'430px',
//         'border':'2px solid #a5a5a5',
//         'padding':'20px',
//         'background-color':'#f3f3f3',
//         'border-radius':'3px',
//         'text-align':'center',
//         'margin-left':'100px',
//         'margin-top':'50px'})
//     $("div#form1").append(
//         // Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
//         $("<h3/>").text("Contact Form"), $("<p/>").text("This is my form. Please fill it out. It's awesome!"), $("<form/>", {
//             action: '#',
//             method: '#'
//         }).append(
//             // Create <form> Tag and Appending in HTML Div form1.
//             $("<input/>", {
//                 type: 'text',
//                 id: 'vname',
//                 name: 'name',
//                 placeholder: 'Your Name'
//             }), // Creating Input Element With Attribute.
//             $("<input/>", {
//                 type: 'text',
//                 id: 'vemail',
//                 name: 'email',
//                 placeholder: 'Your Email'
//             }), $("<textarea/>", {
//                 rows: '5px',
//                 cols: '27px',
//                 type: 'text',
//                 id: 'vmsg',
//                 name: 'msg',
//                 placeholder: 'Message'
//             }), $("<br/>"), $("<input/>", {
//                 type: 'submit',
//                 id: 'submit',
//                 value: 'Submit'
//             })))
// });