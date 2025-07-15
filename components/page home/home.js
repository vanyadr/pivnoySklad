"use strict";

import {controlModel} from '../../js/modules/modelRotation.js';
import { createBorderSvg } from '../../js/modules/cardBorder.js';
import { updateSlider } from '../../js/modules/initHomeSlider.js';

window.addEventListener('load', () => {
    controlModel();
    updateSlider();
    createBorderSvg();
});