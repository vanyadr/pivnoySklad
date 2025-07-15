"use strict";

import {moveBubble} from '../../js/modules/headerBubble.js';
import {toggleAccordion} from '../../js/modules/toggleAccordion.js';
import {toggleBurgerMenu} from '../../js/modules/toggleBurger.js';

window.addEventListener('load', () => {
    moveBubble();
    toggleAccordion();
    toggleBurgerMenu();
});