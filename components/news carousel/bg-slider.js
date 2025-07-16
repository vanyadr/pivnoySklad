"use strict";

import { createBorderSvg } from '../../js/modules/cardBorder.js';

window.addEventListener('load', () => {
    let slidesToShow = (document.documentElement.clientWidth <= 768) ? 1 : 2;
    $('.bg-slider__container').slick({ 
        dots: true,
        infinite: true,
        speed: 500,
        dots: false,
        prevArrow: '.bg-slider__btn-left',
        nextArrow: '.bg-slider__btn-right',
        slidesToShow: slidesToShow,
        slidesToScroll: 1
    });
    createBorderSvg();
});
