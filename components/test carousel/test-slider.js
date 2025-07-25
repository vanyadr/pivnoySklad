"use strict";

import { HandleSlider } from './modules/handleSlider.js';
import { createBorderSvg } from './modules/cardBorder.js';

let slidesToShowProducts,
    leaders;

const updateSlider = function () {
    function calcSlidersNum() {
        slidesToShowProducts = 5;
            
        if (document.documentElement.clientWidth <= 1800) {
            slidesToShowProducts = 4;
        };
        if (document.documentElement.clientWidth <= 1024) {
            slidesToShowProducts = 3;
        };
        if (document.documentElement.clientWidth <= 768) {
            slidesToShowProducts = 2;
        };
    }
    
    function addSliders () {
        leaders = new HandleSlider(
            '.leaders',
            slidesToShowProducts,
            1
        );

        leaders.moveSlider();
    }
    
    function update() {
        leaders.setSlidesPerScreen(slidesToShowProducts);
    }
    
    calcSlidersNum();
    addSliders();

    window.addEventListener('resize', () => {
        calcSlidersNum();
        update();
    });
};

window.addEventListener('load', () => {
    updateSlider();
    createBorderSvg();
});