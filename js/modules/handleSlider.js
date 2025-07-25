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
        this.maxOffset = 0;
        this.swipeXStart = 0;
        this.swipeXEnd = 0;
        this.swipeXAction = 0;
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
            transform: translate3d(0, 0, 0);
            transition: 0.3s all ease;
        `;
        this.maxOffset = (this.slideWidth + this.slidesGap) * (this.slidesQty - this.slidesPerScreen);
    }
    setSlidesPerScreen(num) {
        this.slidesPerScreen = num;
        this.slidesGap = parseFloat(window.getComputedStyle(this.sliderFlex).columnGap);
        this.slideWidth = this.calcSlideWidth();

        this.init();
    }
    moveSlider() {
        this.prev.addEventListener('click', () => {
            this.slideMinus();
        });
        this.next.addEventListener('click', () => {
            this.slidePlus();
        });
        this.sliderWindow.addEventListener('touchstart', e => this.swipeStart(e));
        this.sliderWindow.addEventListener('touchmove', e => this.swipeAction(e));
        this.sliderWindow.addEventListener('touchend', e => this.swipeEnd(e));
    }
    render() {
        this.sliderFlex.style.transform = `translate3d(-${this.offset}px, 0, 0)`;
    }
    slidePlus() {
        if (this.slideIndex === this.slidesQty - this.slidesPerScreen) {
            this.slideIndex = 0;
            this.offset = 0;
        } else {
            this.slideIndex += this.slidesToSlide;
            this.offset = (this.slideWidth + this.slidesGap) * this.slideIndex;
        };

        this.render();
    }
    slideMinus() {
        if (this.slideIndex === 0) {
            this.slideIndex = this.slidesQty - this.slidesPerScreen;
        } else {
            this.slideIndex -= this.slidesToSlide;
        };
        this.offset = (this.slideWidth + this.slidesGap) * this.slideIndex;

        this.render();
    }
    swipeStart(e) {
        this.swipeXStart = e.changedTouches[0].clientX;
        this.swipeXAction = e.changedTouches[0].clientX;
    }
    swipeAction(e) {
        this.offset += (this.swipeXAction - e.changedTouches[0].clientX);
        this.swipeXAction = e.changedTouches[0].clientX;

        if( this.offset < 0) this.offset = 0;
        if( this.offset > this.maxOffset) this.offset = this.maxOffset;

        this.render();
    }
    swipeEnd(e) {
        this.swipeXEnd = e.changedTouches[0].clientX;
        
        this.slideIndex += Math.round((this.swipeXStart - this.swipeXEnd) / (this.slideWidth + this.slidesGap));

        if (this.slideIndex > this.slidesQty - this.slidesPerScreen) {
            this.slideIndex = this.slidesQty - this.slidesPerScreen;
            this.offset = (this.slideWidth + this.slidesGap) * this.slideIndex;
        } else if (this.slideIndex < 0) {
            this.slideIndex = 0;
            this.offset = 0;
        } else {
            this.offset = (this.slideWidth + this.slidesGap) * this.slideIndex;
        }

        this.render();
    }
}