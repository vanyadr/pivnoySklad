import { createBorderSvg } from './modules/cardBorder.js';
import { toggleFiltersItem, tickMenuItem } from './modules/openFilters.js';

window.addEventListener('load', () => {
    createBorderSvg();
    toggleFiltersItem();
    tickMenuItem();
});