"use strict";

import { createBorderSvg } from './modules/cardBorder.js';
import { updateSlider } from './modules/initAdditionalSlider.js';

window.addEventListener('load', () => {
    updateSlider();
    createBorderSvg();
});