function findParentByClassName(element, className) {
    let elem = element;
    
    while(!elem.classList.contains(className)) {
        if(elem.tagName.toLowerCase() == 'html') return false;
        elem = elem.parentNode;
    }

    return elem;
};

export const changeQuantity = function () {
    document.body.addEventListener('click', function(e) {
        console.log(e.target);
        if (e.target.classList.contains('change-quantity-minus') ||
            e.target.classList.contains('change-quantity-plus'))
        {
            e.preventDefault();
            const clickedElem = e.target;
            const inp = findParentByClassName(clickedElem, 'quantity').querySelector('.quantity__num');
            let inpVal = +inp.value;
            
            if (clickedElem.classList.contains('change-quantity-plus')) {
                inpVal++;
            } else if (inpVal > 0) {
                inpVal--;
            }
            
            inp.value = inpVal;
            inp.setAttribute('value', inpVal);
        }
    });
};