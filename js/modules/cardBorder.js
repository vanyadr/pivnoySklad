export const createBorderSvg = function () {
    const clipPathMobile = document.querySelector('#clip-path-mobile'),
          clipPath = document.querySelector('#clip-path');

    if (clipPath && clipPathMobile) {
        const pathElemMobile = clipPathMobile.querySelector('path'),
              pathElem = clipPath.querySelector('path');
        const svgElemMobile = clipPathMobile.parentNode,
              svgElem = clipPath.parentNode;
        const originalWidthMobile = svgElemMobile.getAttribute('width'),
              originalWidth = svgElem.getAttribute('width');
        const originalPathDataMobile = pathElemMobile.getAttribute('d'),
              originalPathData = pathElem.getAttribute('d');
        const borders = document.querySelectorAll('.beer-card__border');

        function scalePathData(pathData, scale) {
            return pathData.replace(
                /([MLHVCSQTAZ])([^MLHVCSQTAZ]*)/gi,
                (match, command, coords) => {
                if (!coords) return match;
                    const scaledCoords = coords.split(/[\s,]+/)
                        .filter(Boolean)
                        .map(coord => parseFloat(coord) * scale)
                        .join(' ');
                    return command + scaledCoords;
                }
            );
        }

        function updateSVG() {
            const img = document.querySelector('.beer-card__img');

            if (!img) return;

            const imgWidth = img.clientWidth;
            const scaleMobile = imgWidth / originalWidthMobile,
                  scale = imgWidth / originalWidth;
            const newPathDataMobile = scalePathData(originalPathDataMobile, scaleMobile),
                  newPathData = scalePathData(originalPathData, scale);

            pathElemMobile.setAttribute('d', newPathDataMobile);
            pathElem.setAttribute('d', newPathData);

            borders.forEach(border => {
                border.setAttribute('width', imgWidth);
                border.setAttribute('height', imgWidth);
                border.setAttribute('viewBox', `0 0 ${imgWidth} ${imgWidth}`);
                if (border.classList.contains('beer-card__border--mobile')) {
                    border.querySelector('path').setAttribute('d', newPathDataMobile);
                } else {
                    border.querySelector('path').setAttribute('d', newPathData);
                };
            });
        }
        
        updateSVG();
    };
};