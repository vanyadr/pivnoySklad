export const controlModel = function () {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const container = document.querySelector('.f-screen__pic');
    let sceneActive = true;
    let animationId;
    let model;

    function startScene(cameraPos, rotationZ) {

        camera.position.set(cameraPos[0], cameraPos[1], cameraPos[2]);
        camera.lookAt(-0.7, 0, -8);
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const sunLight1 = new THREE.DirectionalLight(0xffffff, 10);
        sunLight1.position.set(0, 100, 100);
        sunLight1.target.position.set(0, -100, -100);
        scene.add(sunLight1);

        THREE.RectAreaLightUniformsLib.init();
        const areaLight1 = new THREE.RectAreaLight(0xffffff, 1, 10, 15);
        areaLight1.position.set(15, 1, -7);
        areaLight1.rotation.y = 90;
        scene.add(areaLight1);

        const areaLight2 = new THREE.RectAreaLight(0xffffff, 1, 10, 15);
        areaLight2.position.set(-10, -10, 0);
        areaLight2.rotation.y = -90;
        scene.add(areaLight2);

        const pivot = new THREE.Group();
        const tiltAxis = new THREE.Vector3( 0, 4, 0 ).normalize();
        scene.add(pivot);

        const loader = new THREE.GLTFLoader();
        const dracoLoader = new THREE.DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
        loader.setDRACOLoader(dracoLoader);

        loader.load(
            'models/can-compressed.glb',
            (gltf) => {
                model = gltf.scene;
                model.rotation.set(0, 0, 0);
                model.rotation.z = rotationZ;
                pivot.add(model);
                pivot.position.set(0, 0, 0);
            },
            undefined,
            (error) => {
                console.error('Ошибка загрузки модели:', error);
            }
        );

        function animate() {
            if (sceneActive) {
                animationId = requestAnimationFrame(animate);
                if (model) model.rotateOnAxis(tiltAxis, 0.01)
                renderer.render(scene, camera);
            };
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

    scroll = window.scrollY;
    console.log(scroll);
    const windowHeight = window.innerHeight;

    if (scroll < 300) {
        startScene([-0.7, 3, 5], 0.4);
    } else if (scroll >=300 && scroll < windowHeight) {
        startScene([-0.7, 2, 4], -0.5);
    } else if (scroll >= windowHeight) {
        startScene([-0.7, 2, 4], -0.5);
    }

    container.addEventListener('animationend', () => {
        if (scroll < 300) {
            container.classList.add('position1');
        } else if (scroll >=300 && scroll < windowHeight) {
            container.classList.add('position2');
        } else if (scroll >= windowHeight) {
            container.classList.add('position3');
            container.style.top = `${document.querySelector('.about').offsetTop}px`;
        }
        container.style.opacity = 1;
    });

    //На случай, если из-за анимаций будут лаги - закомментировать код ниже и откомментировать этот

    // const disableScrollPosition = window.innerHeight * 1.5;
    // window.addEventListener('scroll', () => {
    //     const currentScroll = window.scrollY || window.pageYOffset;
    //     if (currentScroll >= disableScrollPosition && sceneActive) {
    //         stopScene();
    //         sceneActive = false;
    //     } else if (currentScroll < disableScrollPosition && !sceneActive) {
    //         sceneActive = true;
    //         startScene();
    //     }
    // });

    let isPos1 = true,
        isPos2 = false,
        isPos3 = false;
        const disableScrollPosition = document.querySelector('.about').offsetTop + document.querySelector('.about').clientHeight + 500;

    window.addEventListener('scroll', () => {

        scroll = window.scrollY;
        const windowHeight = window.innerHeight;
        const classlist = Array.from(container.classList);
        
        if (scroll < 300) {

            isPos2 = false;
            isPos3 = false;
            if (!isPos1) {
                classlist.forEach(className => {
                    if (className.includes('position')) container.classList.remove(className);
                });
                container.style.top = '0px';
                container.classList.add('position1');
                isPos1 = true;
                model.rotation.set(0, 0, 0);
                model.rotation.z = 0.4;
                camera.position.set(-0.7, 3, 5);
                camera.updateProjectionMatrix();
            };
        } else if (scroll >=300 && scroll < windowHeight) {
            
            isPos1 = false;
            isPos3 = false;
            if (!isPos2) {
                classlist.forEach(className => {
                    if (className.includes('position')) container.classList.remove(className);
                });
                container.classList.add('position2');
                isPos2 = true;
            }

        } else if (scroll >= windowHeight && scroll < disableScrollPosition) {

            isPos1 = false;
            isPos2 = false;
            if (!sceneActive) {
                sceneActive = true;
                isPos3 = true;
                startScene([-0.7, 2, 4], -0.5);
            } else {
                if (!isPos3) {
                    classlist.forEach(className => {
                        if (className.includes('position')) container.classList.remove(className);
                    });
                    container.style.top = `${document.querySelector('.about').offsetTop}px`;
                    container.classList.add('position3');
                    isPos3 = true;
                    model.rotation.set(0, 0, 0);
                    model.rotation.z = -0.5;
                    camera.position.set(-0.7, 2, 4);
                    camera.updateProjectionMatrix();
                };
            };

        } else if (scroll >= disableScrollPosition && sceneActive) {
            stopScene();
            sceneActive = false;
            isPos1 = false;
            isPos2 = false;
            isPos3 = false;
        }
    });
};