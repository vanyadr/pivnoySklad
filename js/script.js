import {moveBubble} from './modules/headerBubble.js';
import {toggleAccordion} from './modules/toggleAccordion.js';
import {toggleBurgerMenu} from './modules/toggleBurger.js';

window.addEventListener('load', () => {
    moveBubble();
    toggleAccordion();
    toggleBurgerMenu();
});