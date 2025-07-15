let slidesToShow;

function calcSlidersNum() {
    slidesToShow = 5;
        
    if (document.documentElement.clientWidth <= 1800) {
        slidesToShow = 4;
    };
    if (document.documentElement.clientWidth <= 1024) {
        slidesToShow = 3;
    };
    if (document.documentElement.clientWidth <= 768) {
        slidesToShow = 2;
    };
}

function addSliders () {
    $('.border-slider__container.additional').slick({
        infinite: true,
        speed: 500,
        dots: false,
        prevArrow: '.border-slider__btn-left.additional',
        nextArrow: '.border-slider__btn-right.additional',
        slidesToShow: slidesToShow,
        slidesToScroll: 1
    });
}

function removeSliders() {
    $('.border-slider__container.additional').slick('unslick');
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