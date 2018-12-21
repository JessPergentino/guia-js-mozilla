var input = document.querySelector('.numberInput');
var para = document.querySelector('p');

function quadrado(num) {
    return num * num;
}

function cubo(num) {
    return num * num * num;
}

function fatorial(num) {
    var x = num;
    while (x > 1) {
        num *= x - 1;
        x--;
    }
    return num;
}

function raizQuadrada(num){
    return Math.sqrt(num);
}

function raizCubica(num){
    return Math.cbrt(num);
}

function logBase10(num){
    return Math.log10(num);
}

input.onchange = function () {
    var num = input.value;
    if (isNaN(num)) {
        para.textContent = "Insira um numero valido";
    } else {
        para.textContent = "O quadrado de " + num + " é: " + quadrado(num) + ". "
            + "O cubo de " + num + " é: " + cubo(num) + ". "
            + "O fatorial de " + num + " é: " + fatorial(num) + ". "
            + "A raiz Quadrada de " + num + " é: " + raizQuadrada(num) + ". "
            + "A raiz Cubica de " + num + " é: " + raizCubica(num) + ". "
            + "O Log de Base 10 de " + num + " é: " + logBase10(num) + ". ";

    }
}