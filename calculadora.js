const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

botonNumeros.forEach(function (boton) {
    boton.addEventListener('click', function () {
        agregarNumero(boton.innerText);
    })
});

botonOpera.forEach(function (boton) {
    boton.addEventListener('click', function () {
        selectOperacion(boton.innerText);
    })
});

botonIgual.addEventListener('click', function () {
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click', function () {
    clear();
    actualizarDisplay();
});

function agregarNumero(num) {
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function selectOperacion(op) {
    if (opeActual === '') return;
    if (opeActual !== '') {
        calcular()
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular() {
    var calculo;
    const anterior = parseFloat(opeActual);
    const actual = parseFloat(opeActual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;

        case '/':
            calculo = anterior / actual;
            break;

        case 'x':
            calculo = anterior * actual;
            break;

        default:
            return;
            break;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}

function clear() {
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay() {
    result.value = opeActual;
}

clear();