"use strict";

import { toggleFiltersItem, tickMenuItem, toggleFiltersAccordion, toggleFiltersBlock } from './modules/openFilters.js';

window.addEventListener('load', () => {
    toggleFiltersItem();
    tickMenuItem();
    toggleFiltersBlock();
    toggleFiltersAccordion();
});