//JS só possui um tipo para numeros Number
var meuInt = 45;
var meuFloat = 7.8;
console.log(meuInt);
console.log(meuFloat);

console.log(typeof(meuInt));
console.log(typeof(meuFloat));

//Operações
console.log(10 + 8);
console.log(7 * 5);
console.log(80 % 2);

//Operações com variaveis
var num1 = 10;
var num2 = 5;
console.log(num2 + 8);
console.log(num1 * 5);
console.log(num1 / num2);

//Expressões
console.log(num2 + 8 * num2);
console.log(num1 * 5 - 5);
console.log( 8 + num1 / num2);

//Precedencias - utilizar paranteces para garantir a precedencia
console.log((num2 + 8) * num2);
console.log((num1 * 5) - 5);
console.log( 8 + (num1 / num2));

//Operador Incremento e Decremento - Não se pode incrementear/decrementar diretamente no numero
var num3 = 0;
console.log(num3++);
console.log(num3);

var num4 = 5;
console.log(num4--);
console.log(num4);

//Operadores de Atribuição
var x = 3; // x contém o valor 3
var y = 4; // y contém o valor 4
console.log(x *= y); // x agora contém o valor 12
console.log(x += y);
console.log(x -= y);
console.log(x /= y);

//Operador de Comparação
var btn = document.querySelector('button');
var txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
   if (btn.textContent === 'Iniciar máquina') {
       btn.textContent = 'Parar máquina';
       txt.textContent = 'A máquina iniciou!';
   } else {
       btn.textContent = 'Iniciar máquina';
       txt.textContent = 'A máquina está parada.';
   }
}



