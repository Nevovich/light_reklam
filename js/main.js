$( document ).ready(function() {
    // Определение ширины экрана
    let screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        $('.header-block').after('<nav class="header-navbar mt-0"><a href="#advantages">Преимущества</a><a href="#clients">Наши клиенты</a><a href="#prices">Цены</a><a href="#faq">FAQ</a><a href="#">Контакты</a></nav>');
    } else {
        $('.contacts').before('<nav class="header-navbar mt-0"><a href="#advantages">Преимущества</a><a href="#clients">Наши клиенты</a><a href="#prices">Цены</a><a href="#faq">FAQ</a><a href="#">Контакты</a></nav>');
    };
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        focusOnSelect: true,
        touchMove: true,
        prevArrow:'<button class="slick-prev"><img src="img/slider/arrow-left.svg"></button>',
        nextArrow:'<button class="slick-next"><img src="img/slider/arrow-right.svg"></button>',
        responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false
            }
        }
        ]
        });
        $('.price-slider__block').slick({
            touchMove: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: true,
            prevArrow:'<button class="price-slick price-slick-prev"><img src="img/slider/arrow-left_white.svg"></button>',
            nextArrow:'<button class="price-slick price-slick-next"><img src="img/slider/arrow-right_white.svg"></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                }
            ],
        });
        
        ymaps.ready(function(){new ymaps.Map("map",{center:[55.65321497, 51.80665612],zoom:15.4},{searchControlProvider:"yandex#search"}).geoObjects.add(new ymaps.Placemark([55.65321497, 51.80665612],{},{preset:"islands#blueCircleDotIcon"}))})

});