(function($) {
    "use strict"; 

    $(window).on('scroll load', function() {
        if ($(".navbar").offset().top > 20) {
            $(".fixed-top").addClass("top-nav-collapse");
        } else {
            $(".fixed-top").removeClass("top-nav-collapse");
        }
    });

    $(function() {
        $(document).on('click', 'a.page-scroll', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 600, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    $(".navbar-nav li a").on("click", function(event) {
        if (!$(this).parent().hasClass('dropdown'))
            $(".navbar-collapse").collapse('hide');
    });

    $("#js-rotating").Morphext({
        animation: "fadeIn",
        separator: ",",
        speed: 2000,
        complete: function () {}
    });

    var cardSlider = new Swiper('.card-slider', {
		
        loop: false,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		slidesPerView: 1,
		spaceBetween: 8,
        centeredSlides: false,
        breakpoints: {
            992: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            } 
        }
    });

    var imageSlider = new Swiper('.image-slider', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        spaceBetween: 30,
        slidesPerView: 5,
        breakpoints: {
            380: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            516: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 30
            }
        }
    });

    var imageSlider = new Swiper('.profile-slider', {
        autoplay: {
            delay: 3500,
            disableOnInteraction: false
        },
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        spaceBetween: 30,
        slidesPerView: 5,
        breakpoints: {
            380: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            516: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 30
            }
        }
    });

    $("input, textarea").keyup(function(){
        if ($(this).val() != '') {
            $(this).addClass('notEmpty');
        } else {
            $(this).removeClass('notEmpty');
        }
    });

    $("#contactForm").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            cformError();
            csubmitMSG(false, "Please fill all fields!");
        } else {
            event.preventDefault();
            csubmitForm();
        }
    });

    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });

    $(".button, a, button").mouseup(function() {
        $(this).blur();
    });

})(jQuery);