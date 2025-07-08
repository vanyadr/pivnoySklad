export const controlModel = function () {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const container = document.querySelector('.f-screen__pic');
    let sceneActive = true;
    let animationId;

    function startScene() {

        camera.position.set(-0.7, 3, 5);
        camera.lookAt(-0.7, 0, -8);
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const sunLight = new THREE.DirectionalLight(0xffffff, 15);
        sunLight.position.set(0, 100, 100);
        sunLight.target.position.set(0, -100, -100);
        scene.add(sunLight);

        const pivot = new THREE.Group();
        const tiltAxis = new THREE.Vector3( 0, 4, 0 ).normalize();
        scene.add(pivot);

        const loader = new THREE.GLTFLoader();
        const dracoLoader = new THREE.DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
        loader.setDRACOLoader(dracoLoader);

        let model;
        loader.load(
            'models/can-compressed.glb',
            (gltf) => {
                model = gltf.scene;
                model.rotation.z = 0.4;
                pivot.add(model);
                pivot.position.set(0, 0, 0);
            },
            undefined,
            (error) => {
                console.error('Ошибка загрузки модели:', error);
            }
        );

        function animate() {
            if (!sceneActive) return;
            animationId = requestAnimationFrame(animate);
            if (model) model.rotateOnAxis(tiltAxis, 0.01)
            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    };

    function stopScene() {
        cancelAnimationFrame(animationId);
        renderer.dispose();
        scene.clear();
    }

    startScene();

    container.addEventListener('animationend', () => {
        container.classList.add('position1');
        container.style.opacity = 1;
    });

    const disableScrollPosition = window.innerHeight;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY || window.pageYOffset;
        if (currentScroll >= disableScrollPosition && sceneActive) {
            stopScene();
            sceneActive = false;
        } else if (currentScroll < disableScrollPosition && !sceneActive) {
            sceneActive = true;
            startScene();
        }
    });

    // window.addEventListener('scroll', () => {
    //     const rect = container.getBoundingClientRect();
    //     if (rect.bottom >= 0 && container.classList.contains('hide')) {
    //         container.classList.remove('hide');
    //     } else {
    //         if (rect.bottom < 0 && !container.classList.contains('hide')) container.classList.add('hide');
    //     }
    // });

    // window.addEventListener('scroll', () => {
    //     const rect = container.getBoundingClientRect();
    //     if (rect.bottom >= 0 && container.classList.contains('hide')) {
    //         container.classList.remove('hide');
    //     } else if (rect.bottom < 0 && !container.classList.contains('hide')) {
    //         container.classList.add('hide');
    //     }

        // scroll = window.scrollY;
        // const windowHeight = window.innerHeight;
        // const classlist = Array.from(container.classList);
        
        // if (scroll < 300) {

        //     classlist.forEach(className => {
        //         if (className.includes('position')) container.classList.remove(className);
        //     });
        //     container.style.top = '0px';
        //     container.classList.add('position1');
        //     // model.rotation.z = 0.4;
        //     // camera.position.set(-0.7, 3, 5);
        //     // renderer.render(scene, camera);

        // } else if (scroll >=300 && scroll < windowHeight) {

        //     classlist.forEach(className => {
        //         if (className.includes('position')) container.classList.remove(className);
        //     });
        //     container.classList.add('position2');

        // } else if (scroll >= windowHeight) {

        //     classlist.forEach(className => {
        //         if (className.includes('position')) container.classList.remove(className);
        //     });
        //     container.style.top = `${document.querySelector('.about').offsetTop}px`;
        //     container.classList.add('position3');
        //     // model.rotation.z = -0.5;
        //     // camera.position.set(-0.7, 3, 4);
        //     // renderer.render(scene, camera);

        // }
    // });


    // const model = document.querySelector('#beer-3d-model');

    
    // let targetRotation = 0;
    // let currentRotation = -90;
    // model.orientation = `0deg 23.82deg ${currentRotation}deg`;
    // model.cameraOrbit = `0 90deg 10m`;
    

    // let timerId = setInterval(() => {
    //     rotation -= 180;
    //     targetRotation = rotation;
    // }, 2000);

    // function animate(targetRotation) {
    //     // while (currentRotation < targetRotation) {
    //         // currentRotation += (targetRotation - currentRotation) * 0.1;
    //         currentRotation = targetRotation;
    //         model.orientation = `0deg 23.82deg ${currentRotation}deg`;
    //     //     requestAnimationFrame(animate);
    //     // };
    // };
    
    // window.addEventListener('scroll', () => {
    //     const scrollY = window.scrollY;
    //     if (scrollY > 200) {
    //         targetRotation = -270;
    //     } else if (scrollY > 1000) {
    //         targetRotation = -90;
    //     };
    //     animate(targetRotation);

    //     // model.orientation = `0deg 23.82deg ${-90 - scrollY * 0.002}rad`;
    //     // model.cameraOrbit = `0deg 90deg ${10 - scrollY * 0.003}m`;
    // });

    // window.addEventListener('scroll', () => {
    //     const scrollY = window.scrollY;
    //     model.orientation = `0deg 23.82deg ${-90 - scrollY * 0.002}rad`;
    //     model.cameraOrbit = `0deg 90deg ${10 - scrollY * 0.003}m`;
    // });
};