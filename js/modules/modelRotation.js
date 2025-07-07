export const rotateModel = function () {
    const model = document.querySelector('#beer-3d-model');

    // window.addEventListener('scroll', () => {
    //     const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    //     targetRotation = scrollProgress * 6.28;
    // });

    let targetRotation = 0;
    let currentRotation = -90;
    model.orientation = `0deg 23.82deg ${currentRotation}deg`;
    model.cameraOrbit = `0 90deg 10m`;
    
    // let timerId = setInterval(() => {
    //     rotation -= 180;
    //     targetRotation = rotation;
    // }, 2000);

    function animate(targetRotation) {
        // while (currentRotation < targetRotation) {
            // currentRotation += (targetRotation - currentRotation) * 0.1;
            currentRotation = targetRotation;
            model.orientation = `0deg 23.82deg ${currentRotation}deg`;
        //     requestAnimationFrame(animate);
        // };
    };
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY > 200) {
            targetRotation = -270;
        } else if (scrollY > 1000) {
            targetRotation = -90;
        };
        animate(targetRotation);

        // model.orientation = `0deg 23.82deg ${-90 - scrollY * 0.002}rad`;
        // model.cameraOrbit = `0deg 90deg ${10 - scrollY * 0.003}m`;
    });

    // window.addEventListener('scroll', () => {
    //     const scrollY = window.scrollY;
    //     model.orientation = `0deg 23.82deg ${-90 - scrollY * 0.002}rad`;
    //     model.cameraOrbit = `0deg 90deg ${10 - scrollY * 0.003}m`;
    // });
};