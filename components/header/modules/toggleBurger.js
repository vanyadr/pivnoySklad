export const toggleBurgerMenu = function () {
    const btn = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__burger-menu');
    const items = document.querySelectorAll('.accrodion-item');


    btn.addEventListener('click', () => {
        menu.classList.toggle('opened');
        btn.classList.toggle('opened');
        if (btn.classList.contains('opened')) {
            items.forEach(
                (item) => {
                    if (item.querySelector('.accordion-content').classList.contains('opened')) {
                        item.querySelector('.accordion-content').classList.remove('opened');
                        item.querySelector('.accordion-content').style.height = 0;
                        item.querySelector('.accordion-bullet').classList.remove('opened');
                        item.querySelector('.accordion-header').classList.remove('opened');
                    };
                }
            );
        }
    });
};