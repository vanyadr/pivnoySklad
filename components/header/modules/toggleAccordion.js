export const toggleAccordion = function () {
    const items = document.querySelectorAll('.accrodion-item');
    let counter = 1;
    
    if (items) {
        items.forEach(
            function (item) {
                const btn = item.querySelector('.accordion-header');
    
                item.dataset.accordion = counter;
                btn.dataset.accordion = counter;
                btn.addEventListener('click', 
                    function () {
                        const correctItem = document.querySelector(`.accrodion-item[data-accordion="${this.dataset.accordion}"]`);
                        const correctContent = correctItem.querySelector('.accordion-content');
                        const correctHeader = correctItem.querySelector('.accordion-header');
                        const correctBullet = correctItem.querySelector('.accordion-bullet');
                        const contentHeight = correctContent.scrollHeight;
                        
                        correctContent.classList.toggle('opened');

                        if (correctContent.classList.contains('opened')) {
                            correctContent.style.height = `${contentHeight}px`;
                        } else {
                            correctContent.style.height = 0;
                        }

                        correctBullet.classList.toggle('opened');
                        correctHeader.classList.toggle('opened');
                    }
                );
                counter++;
            }
        );
    }
};