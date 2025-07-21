"use strict";

import { animate } from "./modules/bottlesDropAnimation.js";

window.addEventListener('load', () => {
    const positions = [
        {
            bottom: 0, //число банок (в ширину) от дна
            left: 16, //процент от ширины корзинки
            rotate: 90 //угол поворота относительно правого нижнего угла
        },
        {
            bottom: 1,
            left: 10,
            rotate: 90
        },
        {
            bottom: 1.8,
            left: 6,
            rotate: 85
        },
        {
            bottom: 0,
            left: 60,
            rotate: 0
        },
        {
            bottom: 0,
            left: 70,
            rotate: 3
        },
        {
            bottom: 3,
            left: 0,
            rotate: 94
        },
        {
            bottom: 0,
            left: 80,
            rotate: 7
        },
        {
            bottom: 2.5,
            left: 50,
            rotate: 82
        },
        {
            bottom: 3,
            left: 40,
            rotate: 71
        },
        {
            bottom: 3.6,
            left: 20,
            rotate: 80
        },
    ];
    
    animate(positions, 500);
});