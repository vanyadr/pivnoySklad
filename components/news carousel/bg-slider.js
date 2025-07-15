"use strict";

import { createBorderSvg } from '../../js/modules/cardBorder.js';

window.addEventListener('load', () => {
    let slidesToShow = (document.documentElement.clientWidth <= 768) ? 1 : 2;
    $('.bg-slider__container.your-section-class').slick({ //Если одинаковых слайдеров несколько, заменить your-section-class на класс секции, в которой слайдер лежит
        dots: true,
        infinite: true,
        speed: 500,
        dots: false,
        prevArrow: '.bg-slider__btn-left.your-section-class',
        nextArrow: '.bg-slider__btn-right.your-section-class',
        slidesToShow: slidesToShow,
        slidesToScroll: 1
    });
    createBorderSvg();
});
