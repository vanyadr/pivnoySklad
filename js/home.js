"use strict";

import {controlModel} from './modules/modelRotation.js';
import { createBorderSvg } from './modules/cardBorder.js';

let slidesToShowNews,
    slidesToShowLeaders;

function calcSlidersNum() {
    slidesToShowNews = (document.documentElement.clientWidth <= 768) ? 1 : 2;
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
}

function addSliders () {
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
}

function removeSliders() {
    $('.bg-slider__container').slick('unslick');
    $('.border-slider__container.leaders').slick('unslick');
    $('.border-slider__container.sales').slick('unslick');
}

window.addEventListener('load', () => {
    controlModel();
    calcSlidersNum();
    addSliders();
    createBorderSvg();
});

window.addEventListener('resize', () => {
    removeSliders();
    calcSlidersNum();
    addSliders();
});