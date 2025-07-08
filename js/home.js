import {moveBubble} from './modules/headerBubble.js';
import {toggleAccordion} from './modules/toggleAccordion.js';
import {toggleBurgerMenu} from './modules/toggleBurger.js';
import {controlModel} from './modules/modelRotation.js';
import { createBorderSvg } from './modules/cardBorder.js';

window.addEventListener('load', () => {
    moveBubble();
    toggleAccordion();
    toggleBurgerMenu();
    controlModel();
    
    let slidesToShowNews = (document.documentElement.clientWidth <= 768) ? 1 : 2,
        slidesToShowLeaders = 5;
        
    if (document.documentElement.clientWidth <= 1800) {
        slidesToShowLeaders = 4;
    };
    if (document.documentElement.clientWidth <= 1024) {
        slidesToShowLeaders = 3;
    };
    if (document.documentElement.clientWidth <= 768) {
        slidesToShowLeaders = 2;
    };

    $('.bg-slider__container').slick({
        dots: true,
        infinite: true,
        speed: 500,
        dots: false,
        prevArrow: '.bg-slider__btn-left',
        nextArrow: '.bg-slider__btn-right',
        slidesToShow: slidesToShowNews,
        slidesToScroll: 1
    });
    $('.border-slider__container.leaders').slick({
        infinite: true,
        speed: 500,
        dots: false,
        prevArrow: '.border-slider__btn-left.leaders',
        nextArrow: '.border-slider__btn-right.leaders',
        slidesToShow: slidesToShowLeaders,
        slidesToScroll: 1
    });
    $('.border-slider__container.sales').slick({
        infinite: true,
        speed: 500,
        dots: false,
        prevArrow: '.border-slider__btn-left.sales',
        nextArrow: '.border-slider__btn-right.sales',
        slidesToShow: slidesToShowLeaders,
        slidesToScroll: 1
    });

    createBorderSvg();
});