export class HandleSlider {
    constructor(selector, qtyPerScreen, qtyToSlide) {
        this.sliderWindow = document.querySelector(selector);
        this.sliderFlex = this.sliderWindow.querySelector('.slider-container');
        this.slides = this.sliderWindow.querySelectorAll('.slide');
        this.prev = this.sliderWindow.querySelector('.prev-btn');
        this.next = this.sliderWindow.querySelector('.next-btn');
        this.slidesQty = this.slides.length;
        this.slidesPerScreen = qtyPerScreen;
        this.slidesToSlide = qtyToSlide;
        this.slidesGap = parseFloat(window.getComputedStyle(this.sliderFlex).columnGap);
        this.offset = 0;
        this.slideIndex = 0;
        this.slideWidth = this.calcSlideWidth();
        this.init();
    }

    calcSlideWidth() {
        return (this.sliderWindow.clientWidth - ((this.slidesPerScreen - 1) * this.slidesGap)) / this.slidesPerScreen;
    }
    init() {
        const flexWidth = this.slideWidth * this.slidesQty + this.slidesGap * (this.slidesQty - 1);

        this.sliderFlex.style.cssText = `
            width: ${flexWidth}px;
            transform: translateX(0);
            transition: 0.3s all ease;
        `;
    }
    moveSlider() {
        this.prev.addEventListener('click', () => {
            this.slideMinus();
        });
        this.next.addEventListener('click', () => {
            this.slidePlus();
        });
    }
    slidePlus() {
        if (this.slideIndex === this.slidesQty - this.slidesPerScreen) {
            this.slideIndex = 0;
            this.offset = 0;
        } else {
            this.slideIndex++;
            this.offset = (this.slideWidth + this.slidesGap) * this.slideIndex;
        };

        this.sliderFlex.style.transform = `translateX(-${this.offset}px)`;
    }
    slideMinus() {
        if (this.slideIndex === 0) {
            this.slideIndex = this.slidesQty - this.slidesPerScreen;
        } else {
            this.slideIndex--;
        };
        this.offset = (this.slideWidth + this.slidesGap) * this.slideIndex;

        this.sliderFlex.style.transform = `translateX(-${this.offset}px)`;
    }
}