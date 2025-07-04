export const rotateModel = function () {
    const model = document.querySelector('#beer-3d-model');
        let rotation = 0;
        model.orientation = `0.4rad 0 0`;
        model.cameraOrbit = `0deg 90deg 10m`;
        
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            model.orientation = `0.4rad 0 ${scrollY * 0.01}rad`;
            model.cameraOrbit = `0deg 90deg ${10 - scrollY * 0.01}m`;
        });
};