"use strict";

import { controlModel } from './modules/modelRotation.js';
import { HandleSlider } from './modules/handleSlider.js';
import { createBorderSvg } from './modules/cardBorder.js';

let slidesToShowNews,
    slidesToShowProducts,
    news,
    leaders,
    sales,
    handle;

const updateSlider = function () {
    function calcSlidersNum() {
        slidesToShowNews = (document.documentElement.clientWidth <= 768) ? 1 : 2;
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
        news = new HandleSlider(
            '.news',
            slidesToShowNews,
            1
        );
    
        leaders = new HandleSlider(
            '.leaders',
            slidesToShowProducts,
            1
        );
    
        sales = new HandleSlider(
            '.sales',
            slidesToShowProducts,
            1
        );
    
        handle = new HandleSlider(
            '.handle-slider',
            slidesToShowProducts,
            1
        );

        news.moveSlider();
        leaders.moveSlider();
        sales.moveSlider();
        handle.moveSlider();
    }
    
    function update() {
        news.setSlidesPerScreen(slidesToShowNews);
        leaders.setSlidesPerScreen(slidesToShowProducts);
        sales.setSlidesPerScreen(slidesToShowProducts);
        handle.setSlidesPerScreen(slidesToShowProducts);
    }
    
    calcSlidersNum();
    addSliders();

    window.addEventListener('resize', () => {
        calcSlidersNum();
        update();
    });
};

window.addEventListener('load', () => {
    controlModel();
    updateSlider();
    createBorderSvg();
});