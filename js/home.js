"use strict";

import {controlModel} from './modules/modelRotation.js';
import { HandleSlider } from './modules/handleSlider.js';
import { createBorderSvg } from './modules/cardBorder.js';
import { updateSlider } from './modules/initHomeSlider.js';

window.addEventListener('load', () => {
    controlModel();
    updateSlider();
    new HandleSlider(
        '.handle-slider',
        5,
        1
    ).moveSlider();
    createBorderSvg();
});