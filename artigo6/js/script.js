//Criando String - Pode ser declarada com aspas simples '' ou duplas ""
var string = 'Minha String';
console.log(string);

//Aspas simple e duplas
var simples = 'Minha String';
var dupla = "Minha String";
console.log(simples);
console.log(dupla);

var sglDbl = 'Would you eat a "fish supper"?';
var dblSgl = "I'm feeling blue.";
console.log(sglDbl);
console.log(dblSgl);

//Caractere de escape
var bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth);

//Concatenando String - Utiliza o operador + para concatenação
var nome = "Jessica";
var sobrenome = "Pergentino"
console.log(nome + sobrenome);
console.log("Meu nome é: " + nome + " " + sobrenome);

//Exemplo
var btn = document.querySelector("button");

btn.onclick = function(){
    var nome = prompt("Qual o seu nome?");
    var idade = prompt("Qual a sua Idade?");
    if(idade >= 18 ){
        alert(nome + " Bora beber até cair!!!!! #Sextou");
    } else{
        alert("Fica pra proxima :( " + nome);
    }
}

//Numero X String
console.log("Erro" + 404);
var data = "19" + "97"
console.log(data, typeof data);
console.log(Number(data), typeof Number(data));
var num = 546;
console.log(num.toString(), typeof num.toString());