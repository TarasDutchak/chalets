$(document).ready(function () {
    AOS.init();

    // benefits sliders
    var swiper = new Swiper(".benefit1", {
        slidesPerView: 1.5,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination.sl1",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next.sl1",
            prevEl: ".swiper-button-prev.sl1",
        },
        breakpoints: {
            320: {
                slidesPerView: 1.1,
                spaceBetween: 10,
            },

            575: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },
        },
    });
    var swiper = new Swiper(".benefit2", {
        slidesPerView: 1.5,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination.sl2",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next.sl2",
            prevEl: ".swiper-button-prev.sl2",
        },
        breakpoints: {
            320: {
                slidesPerView: 1.1,
                spaceBetween: 10,
            },

            575: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },
        },
    });
    var swiper = new Swiper(".benefit3", {
        slidesPerView: 1.5,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination.sl3",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next.sl3",
            prevEl: ".swiper-button-prev.sl3",
        },
        breakpoints: {
            320: {
                slidesPerView: 1.1,
                spaceBetween: 10,
            },

            575: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },
        },
    });

    // container space
    //   Space containers
    var windowWidth = $(document).width(),
        containerWidth = $('.container').width(),
        paddingContainer = ((windowWidth - containerWidth) / 2)
    // right
    $('.promosection, .shalesect:nth-child(even), .helptochoise, .details__cont').css('padding-right', paddingContainer);

    $(window).resize(function () {
        var windowWidth = $(document).width(),
            containerWidth = $('.container').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2)
        // right
        $('.promosection, .shalesect:nth-child(even), .helptochoise, .details__cont').css('padding-right', paddingContainer);

    });



    var windowWidth = $(document).width(),
        containerWidth = $('.container').width(),
        paddingContainer = ((windowWidth - containerWidth) / 2)
    // left
    $('.promosection__pleft, .shalesect:nth-child(odd), .helptochoise__content, .details__container').css('padding-left', paddingContainer);

    $(window).resize(function () {
        var windowWidth = $(document).width(),
            containerWidth = $('.container').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2)
        // left
        $('.promosection__pleft, .shalesect:nth-child(odd), .helptochoise__content, .details__container').css('padding-left', paddingContainer);

    });

    // SHALE sliders

    var swiper = new Swiper(".shale1", {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".swiper-pagination.sl4",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });

    // fancybox
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });


    // our photo

    var swiper1 = new Swiper(".ourphotosl", {
        slidesPerView: 1.8,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination.sl5",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next.sl5",
            prevEl: ".swiper-button-prev.sl5",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1.3,
            },

            991: {
                slidesPerView: 1.8,
            },
        },


    });

    // input mask
    $('#telnum').inputmask({
        "mask": "+ 38 /999/ 999-9999",
        showMaskOnHover: false,
        showMaskOnFocus: false,
    });
    $('.telinput').inputmask({
        "mask": "+ 38 /999/ 999-9999",
        showMaskOnHover: false,
        showMaskOnFocus: false,
    });
    $('.date').inputmask({
        "mask": "99 /99/ 9999",
        showMaskOnHover: false,
        showMaskOnFocus: false,
    });



    // faq
    $('.faqsectrow__header').click(function () {
        $(this).next('.faqsectrow__body').slideToggle();
        $(this).toggleClass('active');
    });

    //   to top

    $(function () {
        $('.footer__up a').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1500);
            return false;
        })

    });

    // клік - пункт меню - ховаєм меню
    $('.header__nav .menu-golovne-menyu-container ul li a').click(function (e) {
        // e.preventDefault();
        $('.mobmenu').removeClass('show');
        $('header.header').removeClass('active');

    });

    // Скрол по секціям
    $("body:not(.noscrollmenu) .header__nav .menu-golovne-menyu-container ul").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $(".tobtn").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $(".footer__up").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({ scrollTop: top }, 1500);
    });






    // Бургер меню - клік
    $('.menubtn').click(function () {
        $('header.header').toggleClass('active');
        $('.mobmenu').toggleClass('show');
    });


    // // datepicker
    if ($('.datepick1').length > 0) {
        const picker1 = datepicker('.datepick1', {
            formatter: (input, date, instance) => {
                const value = date.toLocaleDateString()
                input.value = value // => '1/1/2099'
            },
            startDay: 1,
            customDays: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            customMonths: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']
        })
    }
    if ($('.datepick2').length > 0) {
        const picker2 = datepicker('.datepick2', {
            formatter: (input, date, instance) => {
                const value = date.toLocaleDateString()
                input.value = value // => '1/1/2099'
            },
            startDay: 1,
            customDays: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            customMonths: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']
        })
    }



    //    ------------------------------------------------------
    $('.morelessbtn').click(function () {
        $(this).toggleClass('active');
        $(this).find('span').toggle();
        $(this).parent('.includewrapper').find('.includelist').toggleClass('active');
    })

    $('.modalgive .closemodal').click(function(){
        $('.modalgivewrapper').hide();
    })

});