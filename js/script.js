"use strict";

import {moveBubble} from './modules/headerBubble.js';
import {toggleAccordion} from './modules/toggleAccordion.js';
import {toggleBurgerMenu, createMobileMenu} from './modules/toggleBurger.js';
import { validatePhone } from './modules/validation.js';

window.addEventListener('load', () => {
    createMobileMenu();
    moveBubble();
    toggleAccordion();
    toggleBurgerMenu();
    validatePhone('footerPhone');
});