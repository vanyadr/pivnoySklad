function init(bottles, bottlesHolder) {
    bottles.forEach((bottle, i) => {
        bottle.style.left = `${(bottlesHolder.clientWidth / bottles.length) * i}px`;
        bottle.style.transform = `translate(0, -110%) rotateZ(${(180 / bottles.length) * i}deg)`;
    });
};

export const animate = function(positions, offset) {
    const bottles = document.querySelectorAll('.bottles__bottle'),
          bottlesHolder = bottles[0].parentNode,
          cartWidth = bottlesHolder.querySelector('.bottles__cart').clientWidth,
          paddingLeft =  parseFloat(window.getComputedStyle(bottlesHolder).paddingLeft);
          
    init(bottles, bottlesHolder);
    
    function doAnimation() {
        let animationEnd = false;

        if (bottlesHolder.getBoundingClientRect().top <= offset && !animationEnd) {
            animationEnd = true;
            
            let i = 0
            const animationInterval = setInterval(() => {
                if (i <= bottles.length - 1) {
                    const bottle = bottles[i],
                          bottleWidth = bottle.clientWidth,
                          {bottom, left, rotate} = positions[i];
        
                    bottle.style.bottom = `${bottom * bottleWidth}px`;
                    bottle.style.left = `${((left / 100) * cartWidth) - bottleWidth + paddingLeft}px`;
                    bottle.style.transform = `translate(0) rotateZ(${rotate}deg)`;
        
                    i++;
                } else {
                    clearInterval(animationInterval);
                    document.removeEventListener('scroll', doAnimation);
                };
            }, 100);
        };
    };

    function updatePositions() {
        const cartWidth = bottlesHolder.querySelector('.bottles__cart').clientWidth,
              paddingLeft =  parseFloat(window.getComputedStyle(bottlesHolder).paddingLeft);

        bottles.forEach((bottle, i) => {
            const bottleWidth = bottle.clientWidth,
                  {bottom, left, rotate} = positions[i];

            bottle.style.bottom = `${bottom * bottleWidth}px`;
            bottle.style.left = `${((left / 100) * cartWidth) - bottleWidth + paddingLeft}px`;
            bottle.style.transform = `translate(0) rotateZ(${rotate}deg)`;
        });
    };

    document.addEventListener('scroll', doAnimation);
    window.addEventListener('resize', updatePositions);
};