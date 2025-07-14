"use strict";

import { createBorderSvg } from './modules/cardBorder.js';
import { toggleFiltersItem, tickMenuItem, toggleFiltersAccordion, toggleFiltersBlock } from './modules/openFilters.js';

window.addEventListener('load', () => {
    createBorderSvg();
    toggleFiltersItem();
    tickMenuItem();
    toggleFiltersBlock();
    toggleFiltersAccordion();
});