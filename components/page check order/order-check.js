"use strict";

import { validatePhone } from './modules/validation.js';

window.addEventListener('load', () => {
    validatePhone('phone');
});