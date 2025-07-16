import { createBorderSvg } from './modules/cardBorder.js';

window.addEventListener('load', () => {
    let cardsToShow = 5;
        
    if (document.documentElement.clientWidth <= 1800) {
        cardsToShow = 4;
    };
    if (document.documentElement.clientWidth <= 1024) {
        cardsToShow = 3;
    };
    if (document.documentElement.clientWidth <= 768) {
        cardsToShow = 2;
    };
    $('.border-slider__container.additional').slick({ 
        infinite: true,
        speed: 500,
        dots: false,
        prevArrow: '.border-slider__btn-left.additional',
        nextArrow: '.border-slider__btn-right.additional',
        slidesToShow: cardsToShow,
        slidesToScroll: 1
    });

    createBorderSvg(); //Обязательно указывать после инициализации слайдера(-ов) для корректного расчета контура обрезки фотографии
});