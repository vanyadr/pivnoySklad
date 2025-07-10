export const toggleFiltersItem = function () {
    const items = document.querySelectorAll('.filters__item');
    const overlay = document.querySelector('.filters-overlay');
    
    items.forEach(item => {
        item.addEventListener('click', function() {
            items.forEach(item => {
                if (item.classList.contains('selected') && item != this) {
                    item.classList.remove('selected');
                    item.parentNode.querySelector('.filters__menu').classList.remove('opened');
                };
            });
            if (!overlay.classList.contains('active')) overlay.classList.add('active');
            this.classList.toggle('selected');
            this.parentNode.querySelector('.filters__menu').classList.toggle('opened');
        });
    });
    
    overlay.addEventListener('click', () => {
        items.forEach(item => {
            if (item.classList.contains('selected') && item != this) {
                item.classList.remove('selected');
                item.parentNode.querySelector('.filters__menu').classList.remove('opened');
            };
        });
        overlay.classList.remove('active');
    });
};
export const tickMenuItem = function () {
    const items = document.querySelectorAll('.filters__menu-item');
    let selectedItems = [];

    items.forEach(item => {
        item.addEventListener('click', function() {
            const clickedItem = this;
            let selectedInSameMenu = false;
            let isSame = false;
            let selectedId = 0;
            selectedItems.forEach(selectedItem => {
                if (clickedItem.parentNode == selectedItem.parentNode) {
                    selectedInSameMenu = true;
                    selectedId = selectedItems.indexOf(selectedItem);
                };
                if (clickedItem == selectedItem) isSame = true;
            });
            if (!selectedInSameMenu) {
                clickedItem.classList.add('selected');
                selectedItems.push(clickedItem);
            } else {
                selectedItems[selectedId].classList.remove('selected');
                selectedItems.splice(selectedId, 1);
                if (!isSame) {
                    selectedItems.push(clickedItem);
                    clickedItem.classList.add('selected');
                };
            };
        });
    });
};
export const toggleFiltersBlock = function () {};