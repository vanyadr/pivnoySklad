export const rotateModel = function () {
    const model = document.querySelector('#beer-3d-model');
        let rotation = 0;
        model.orientation = `0deg 23.82deg -90deg`;
        model.cameraOrbit = `0 90deg 10m`;
        
        // window.addEventListener('scroll', () => {
        //     const scrollY = window.scrollY;
        //     model.orientation = `0deg 23.82deg ${-90 - scrollY * 0.002}rad`;
        //     model.cameraOrbit = `0deg 90deg ${10 - scrollY * 0.003}m`;
        // });
};