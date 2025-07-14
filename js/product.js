"use strict";

import { createBorderSvg } from './modules/cardBorder.js';
import { updateSlider } from './modules/initSameSlider.js';

window.addEventListener('load', () => {
    updateSlider();
    createBorderSvg();
});