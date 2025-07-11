"use strict";

import {controlModel} from './modules/modelRotation.js';
import { createBorderSvg } from './modules/cardBorder.js';
import { updateSlider } from './modules/initSlider.js';

window.addEventListener('load', () => {
    controlModel();
    updateSlider();
    createBorderSvg();
});