export const validatePhone = function(inputId) {
    const input = document.querySelector(`#${inputId}`),
          symbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
          maxLength = 11;
    let value = '_ (___) ___-__-__',
        length = 0;

    input.addEventListener('input', () => {
        let currentValue = input.value;

        for (let char of currentValue) {
            if (!symbols.includes(char)) {
                currentValue = currentValue.replace(char, '');
            }
        }

        const currentLength = currentValue.length;

        if (currentLength <= maxLength) {
            if (currentLength > length && currentValue[currentLength - 1]) {
                value = value.replace('_', currentValue[currentLength - 1])
            } else if (currentLength <= length && currentLength > 0) {
                let i = value.length - 1,
                    arrValue = value.split('');
    
                for (i; i >= 0; i--) {
                    if (symbols.includes(arrValue[i])) {
                        arrValue.splice(i, 1, '_');
                        break;
                    } else {
                        continue;
                    };
                };
    
                value = arrValue.join('');
            };
    
            input.value = value;
            input.setAttribute('value', value);

            length = currentLength;
        } else {
            input.value = value;
            input.setAttribute('value', value);
        };
    });
}