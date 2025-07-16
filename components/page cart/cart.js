"use strict";

import { createBorderSvg } from './modules/cardBorder.js';
import { updateSlider } from './modules/initAdditionalSlider.js';
import { changeQuantity, toggleCheckout } from './modules/cartActions.js';

window.addEventListener('load', () => {
    updateSlider();
    createBorderSvg();
    changeQuantity();
    toggleCheckout();
});