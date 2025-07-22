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

    // window.addEventListener('resize', () => {
    //     if (document.documentElement.clientWidth > 1024) {
    //         if (btn.classList.contains('opened')) btn.classList.remove('opened');
    //         if (menu.classList.contains('opened')) {
    //             menu.classList.remove('opened');
    //             items.forEach(
    //                 (item) => {
    //                     if (item.querySelector('.accordion-content').classList.contains('opened')) {
    //                         item.querySelector('.accordion-content').classList.remove('opened');
    //                         item.querySelector('.accordion-content').style.height = 0;
    //                         item.querySelector('.accordion-bullet').classList.remove('opened');
    //                         item.querySelector('.accordion-header').classList.remove('opened');
    //                     };
    //                 }
    //             );
    //         }
    //     }
    // });
};

//Create mobile menu
export const createMobileMenu = function () {
    const firstLevelParts = document.querySelectorAll('.header__menu-item>a'),
          secondLevelParts = document.querySelectorAll('.header__drop-down-list'),
          mobileMenuWrapper = document.querySelector('.header__burger-menu>.accrodion-holder'),
          checkBtn =  document.querySelector('.header__check>a');

    class MobileMenuItem {
        constructor(title, children, wrapper, noArrow = false, checkHref = '', checkText = '') {
            this.title = title;
            this.children = children;
            this.wrapper = wrapper;
            this.isNoArrow = noArrow;
            this.checkHref = checkHref;
            this.checkText = checkText;
        }

        render() {
            if (!this.isNoArrow) {
                let childrenItems = '';
                this.children.forEach(child => {
                    childrenItems += `
                        <li class="header__mobile-item"><a href="${child['link']}">${child['content']}</a></li>
    
                    `
                });
                this.wrapper.innerHTML += `
                    <li class="accrodion-item">
                        <button class="accordion-header">
                            <p class="accordion-title">${this.title}</p>
                            <div class="accordion-bullet">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path id="accordion-bullet-vert" d="M6 12H18" stroke="#292522" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path id="accordion-bullet-hor" d="M12 18L12 6" stroke="#292522" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </button>
                        <div class="accordion-content">
                            <ul class="header__mobile-list">
                                ${childrenItems}
                            </ul>
                        </div>
                    </li>
                `;
            } else {
                this.wrapper.innerHTML += `
                    <li class="accordion-item--no-open">
                        <a href="${this.checkHref}">${this.checkText}</a>
                    </li>
                `;
            };
        }
    };
    
    function resetElement(el) {
        el.textContent = '';
    };
    function createPartsObject(firstLevelParts, secondLevelParts) {
        const parts = [];

        firstLevelParts.forEach((part, i) => {
            const subParts = [];
            
            secondLevelParts[i].querySelectorAll('.header__drop-down-item>a').forEach(item => {
                subParts.push({
                    content: item.textContent,
                    link: item.href
                });
            });
    
            parts.push({
                content: part.textContent,
                link: part.href,
                children: subParts
            });
        });

        return parts;
    };
    function createMenu(parts, check) {
        parts.forEach(part => {
            new MobileMenuItem(
                part['content'],
                part['children'],
                mobileMenuWrapper
            ).render();
        });

        new MobileMenuItem(
            '', '',
            mobileMenuWrapper,
            true,
            check.href,
            check.textContent
        ).render();
    };

    const parts = createPartsObject(firstLevelParts, secondLevelParts);
    resetElement(mobileMenuWrapper);
    createMenu(parts, checkBtn);
};