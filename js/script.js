$(document).ready(function () {
    $('.open-close').on('click',function (e) {
        e.preventDefault();
        $("#main").toggleClass('main-open');
        $(".open-nav").toggleClass('main-open');
        // $("#mySidenav").toggleClass('open');
        $("#mySidenav").toggleClass('trans');
    });



    $('.portfolio-item').isotope(  {

        itemSelector: '.item',
        layoutMode: 'fitRows'
    });
    $('.portfolio-menu ul li ').click( function () {
        $('.portfolio-menu ul li ').removeClass('portfolio-menu-active');
        $(this).addClass('portfolio-menu-active');
        var selector = $(this).attr('data-filter');
        $('.portfolio-item').isotope({
            filter:selector
        });
    });



    $('.testimonial-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $(".scroll-top").click(function () {
        $("html, body").animate({
            scrollTop:0
        },1000);

    });

    var scrollTrigger = 1000;

    backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
            $('.scroll-top').css({
                "display": "block"
            });
        } else {
            $('.scroll-top').css({
                "display": "none"
            });
        }
    };


    if ($('.scroll-top').length) {
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });

    }

});


var waypoint = new Waypoint({
    element: document.getElementById('waypoint'),
    handler: function(direction) {
        console.log('Scrolled to waypoint!')
    }
});



