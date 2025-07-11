export const toggleFiltersItem = function () {
    const items = document.querySelectorAll('.filters__item-title');
    const overlay = document.querySelector('.filters-overlay');
    
    items.forEach(item => {
        item.addEventListener('click', function() {
            items.forEach(item => {
                if (item.parentNode.classList.contains('selected') && item != this) {
                    item.parentNode.classList.remove('selected');
                    item.parentNode.parentNode.querySelector('.filters__menu').classList.remove('opened');
                };
            });
            if (!overlay.classList.contains('active')) overlay.classList.add('active');
            this.parentNode.classList.toggle('selected');
            this.parentNode.parentNode.querySelector('.filters__menu').classList.toggle('opened');
        });
    });
    
    overlay.addEventListener('click', () => {
        items.forEach(item => {
            if (item.parentNode.classList.contains('selected') && item != this) {
                item.parentNode.classList.remove('selected');
                item.parentNode.parentNode.querySelector('.filters__menu').classList.remove('opened');
            };
        });
        overlay.classList.remove('active');
    });
};
export const untickMenuItem = function () {

};
export const tickMenuItem = function () {
    const items = document.querySelectorAll('.filters__menu-item');
    let selectedItems = [];

    
    function findParentByClassName(element, className) {
        let elem = element;
        while(!elem.classList.contains(className)) {
            if(elem.tagName.toLowerCase() == 'html') return false;
            elem = elem.parentNode;
        }
        return elem;
    }

    function createBubble(clickedItem) {
        const bubble = document.createElement('span');

        bubble.classList.add('filters__item-select');
        bubble.dataset.menuId = clickedItem.dataset.menuId;
        bubble.textContent = clickedItem.textContent;

        bubble.addEventListener('click', () => {
            selectedItems.forEach(selectedItem => {
                if (selectedItem['menuId'] == bubble.dataset.menuId) {
                    selectedItem['menuElement'].classList.remove('selected');
                    const selectedId = selectedItems.indexOf(selectedItem);
                    selectedItems.splice(selectedId, 1);
                };
                bubble.remove();
            });
        });

        return bubble;
    };

    let counter = 1;
    items.forEach(item => {
        item.dataset.menuId = counter;
        counter++;
        item.addEventListener('click', function() {
            const clickedItem = this;
            const clickedItemHolder = findParentByClassName(clickedItem, 'filters__item-holder');
            let selectedInSameMenu = false;
            let isSame = false;
            let selectedId = 0;

            selectedItems.forEach(selectedItem => {
                if (clickedItem.parentNode == selectedItem['menuElement'].parentNode) {
                    selectedInSameMenu = true;
                    selectedId = selectedItems.indexOf(selectedItem);
                };
                if (clickedItem == selectedItem['menuElement']) isSame = true;
            });

            if (!selectedInSameMenu) {
                clickedItem.classList.add('selected');
                clickedItemHolder.querySelector('.filters__item-select-block').appendChild(createBubble(clickedItem));
                const clickedObject = {
                    menuElement: clickedItem,
                    menuId: clickedItem.dataset.menuId
                };
                selectedItems.push(clickedObject);
            } else {
                selectedItems[selectedId]['menuElement'].classList.remove('selected');
                document.querySelector(`.filters__item-select[data-menu-id='${selectedItems[selectedId]['menuId']}']`).remove();
                selectedItems.splice(selectedId, 1);

                if (!isSame) {
                    clickedItem.classList.add('selected');
                    clickedItemHolder.querySelector('.filters__item-select-block').appendChild(createBubble(clickedItem));
                    const clickedObject = {
                        menuElement: clickedItem,
                        menuId: clickedItem.dataset.menuId
                    };
                    selectedItems.push(clickedObject);
                };
            };
        });
    });
};
export const toggleFiltersBlock = function () {};