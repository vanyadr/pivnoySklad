function calcPositions (btnsBar, btns, barPaddingLeft) {
    let btnsWidth = [];
    let positions = [];
    let underlineWidth = [];
    const gap = Number(getComputedStyle(btnsBar).gap.slice(0, -2));
    if (btns) {
        btns.forEach((btn) => {
            btnsWidth.push(btn.clientWidth);
        });
        let sumBtnsWidth = 0;
        btnsWidth.forEach((num) => {
            sumBtnsWidth += num;
            underlineWidth.push(num + gap);
        });

        positions.push(
            {
                position: -(underlineWidth[0] + barPaddingLeft),
                width: underlineWidth[0]
            }
        );
        positions.push(
            {
                position: (btnsWidth[0] / 2) - (underlineWidth[0] / 2),
                width: underlineWidth[0]
            }
        );
        for (let i = 1; i <= (btns.length - 1); i++) {
            const pos = positions[i]['position'] + (btnsWidth[i - 1] / 2) + (underlineWidth[i - 1] / 2) + gap + (btnsWidth[i] / 2) - (underlineWidth[i] / 2);
            const width = underlineWidth[i];
            const res = {
                position: pos,
                width: width
            };
            positions.push(res);
        };
    };

    return positions;
};

export const moveBubble = function () {
    const btnsBar = document.querySelector('.header__menu-list');
    const btns = document.querySelectorAll('.header__menu-item');
    const infos = document.querySelectorAll('.header__menu-drop-down');
    const underline = document.querySelector('.underline');
    const overlay = document.querySelector('.overlay');
    const remToPx = Number(getComputedStyle(document.querySelector('html')).fontSize.slice(0, -2));
    const barHeight = Number(getComputedStyle(document.querySelector('.header__menu-bar')).height.slice(0, -2));
    const barPaddingLeft = Number(getComputedStyle(document.querySelector('.header__menu')).paddingLeft.slice(0, -2));
    const menuOffsetLeft = document.querySelector('.header__menu').offsetLeft + barPaddingLeft;
    let counter = 1;
    let currentTabIndex = 1

    const underlinePositions = calcPositions(btnsBar, btns, barPaddingLeft);

    if (btns) {
        underline.style.left = `${underlinePositions[0]['position']}px`;
        underline.style.width = `${underlinePositions[0]['width']}px`;
        underline.style.height = `${barHeight - 0.5 * remToPx}px`;
        
        infos.forEach(
            function (info) {
                info.dataset.tabIndex = counter;
                counter++;
            }
        );
        counter = 1;
        
        btns.forEach(
            function (btn) {
                btn.dataset.tabIndex = counter;
                counter++;
                btn.addEventListener('mouseover', 
                    function () {
                        if (!btn.classList.contains('active')) {
                            const newTabIndex = this.dataset.tabIndex;
                            this.classList.add('active');
                            this.querySelector('a').classList.add('active');
                            const newMenu = document.querySelector(`.header__menu-drop-down[data-tab-index="${newTabIndex}"]`);
                            const oldMenu = document.querySelector(`.header__menu-drop-down[data-tab-index="${currentTabIndex}"]`);
                            newMenu.style.left = `${underlinePositions[newTabIndex]['position'] + menuOffsetLeft}px`;
                            newMenu.classList.add('active');
                            oldMenu.classList.remove('active');
                            document.querySelector(`.header__menu-item[data-tab-index="${currentTabIndex}"]`).classList.remove('active');
                            document.querySelector(`.header__menu-item[data-tab-index="${currentTabIndex}"]>a`).classList.remove('active');
                            if (!overlay.classList.contains('active')) overlay.classList.add('active');
                            underline.style.left = `${underlinePositions[newTabIndex]['position']}px`;
                            underline.style.width = `${underlinePositions[newTabIndex]['width']}px`;
                            currentTabIndex = newTabIndex;
                        }
                    }
                );
            }
        );
        overlay.addEventListener('mouseover', () => {
            underline.style.left = `${underlinePositions[0]['position']}px`;
            underline.style.width = `${underlinePositions[0]['width']}px`;
            document.querySelector(`.header__menu-item[data-tab-index="${currentTabIndex}"]`).classList.remove('active');
            document.querySelector(`.header__menu-item[data-tab-index="${currentTabIndex}"]>a`).classList.remove('active');
            document.querySelector(`.header__menu-drop-down[data-tab-index="${currentTabIndex}"]`).classList.remove('active');
            overlay.classList.remove('active');
        });
    };
};