const computerSlider = document.getElementById('numSlider1');
const computerInput = document.getElementById('inputNumSlider1');

if (computerSlider) {
    let computerPrice = 1000;
    let serverPrice = 2000;
    const calculatorResLabel = document.querySelector('.calculator-sum__result span');

    noUiSlider.create(computerSlider, {
        start: [5, 5],
        connect: true,
        step: 1,
        range: {
            'min': 5,
            'max': 51
        },
        format: wNumb({
            decimals: 0,
        }),
        pips: {
            mode: 'steps',
        },
    });

    const serverSlider = document.getElementById('numSlider2');
    const serverInput = document.getElementById('inputNumSlider2');

    noUiSlider.create(serverSlider, {
        start: [1, 1],
        connect: true,
        step: 1,
        range: {
            'min': 1,
            'max': 6
        },
        format: wNumb({
            decimals: 0,
        }),
        pips: {
            mode: 'steps',
        },
    });

    computerSlider.noUiSlider.on('update', function (values, handle) {
        computerInput.value = values[handle];
        priceCalculate(computerPrice, serverPrice, serverInput.value, computerInput.value);
    });
    computerInput.addEventListener('change', function () {
        computerSlider.noUiSlider.set([5, computerInput.value]);
        priceCalculate(computerPrice, serverPrice, serverInput.value, computerInput.value);
    });
    serverSlider.noUiSlider.on('update', function (values, handle) {
        serverInput.value = values[handle];
        priceCalculate(computerPrice, serverPrice, serverInput.value, computerInput.value);
    });
    serverInput.addEventListener('change', function () {
        serverSlider.noUiSlider.set([1, serverInput.value]);
        priceCalculate(computerPrice, serverPrice, serverInput.value, computerInput.value);
    });

    function priceCalculate(computerPrice, serverPrice, serverNum, computerNum) {
        if(computerInput.value == 51 || serverInput.value == 6) {
            calculatorResLabel.innerHTML = 'Индивидуальный расчет';
        } else {
            calculatorResLabel.innerHTML = serverPrice * serverNum + computerPrice * computerNum;
        }
    }
}