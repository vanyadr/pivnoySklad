import {moveBubble} from './modules/headerBubble.js';
import {toggleAccordion} from './modules/toggleAccordion.js';
import {toggleBurgerMenu} from './modules/toggleBurger.js';
import {rotateModel} from './modules/modelRotation.js';

window.addEventListener('load', () => {
    moveBubble();
    toggleAccordion();
    toggleBurgerMenu();
    rotateModel();

    $('.bg-slider__container').slick({
        dots: true,
        infinite: true,
        speed: 800,
        dots: false,
        prevArrow: '.bg-slider__btn-left',
        nextArrow: '.bg-slider__btn-right',
        slidesToShow: 2,
        slidesToScroll: 1
    });
});