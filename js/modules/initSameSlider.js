let slidesToShowLeaders;

function calcSlidersNum() {
    slidesToShowLeaders = 5;
        
    if (document.documentElement.clientWidth <= 1800) {
        slidesToShowLeaders = 4;
    };
    if (document.documentElement.clientWidth <= 1024) {
        slidesToShowLeaders = 3;
    };
    if (document.documentElement.clientWidth <= 768) {
        slidesToShowLeaders = 2;
    };
}

function addSliders () {
    $('.border-slider__container.same').slick({
        infinite: true,
        speed: 500,
        dots: false,
        prevArrow: '.border-slider__btn-left.same',
        nextArrow: '.border-slider__btn-right.same',
        slidesToShow: slidesToShowLeaders,
        slidesToScroll: 1
    });
}

function removeSliders() {
    $('.border-slider__container.same').slick('unslick');
}

export const updateSlider = function () {
    calcSlidersNum();
    addSliders();

    window.addEventListener('resize', () => {
        removeSliders();
        calcSlidersNum();
        addSliders();
    });
};