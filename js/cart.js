"use strict";

import { createBorderSvg } from './modules/cardBorder.js';
import { updateSlider } from './modules/initAdditionalSlider.js';
import { changeQuantity, toggleCheckout } from './modules/cartActions.js';
import { validatePhone } from './modules/validation.js';

window.addEventListener('load', () => {
    updateSlider();
    createBorderSvg();
    changeQuantity();
    toggleCheckout();
    validatePhone('phone');
});