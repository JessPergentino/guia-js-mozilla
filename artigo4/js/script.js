// Exemplo do uso de variaveis
//pegar o elemonto button
var button = document.querySelector('button');
//adiciona um onclick ao obutton e utiliza a variavel nome para guardar o nome informado
button.onclick = function(){
    var nome = prompt("Qual o seu nome?");
    alert("Olá " + nome + " Seja Bem Vindo(a)!!!");
}


//Declarando variaveis
var meuNome;
var minhaIdade;
var meuCachorro;

//Testando
console.log(meuNome);
console.log(minhaIdade);
console.log(meuCachorro);
//console.log(carro); //variavel não existente

//Inicializando uma varialvel
meuNome = "Jessica";
minhaIdade = 21;
meuCachorro = "pinduquinha";

console.log(meuNome);
console.log(minhaIdade);
console.log(meuCachorro);

var num = 123;
console.log(num); 

//Atualizando umam variavel
meuNome = "Demetrius";
minhaIdade = 26;
meuCachorro = "floquinho";

console.log(meuNome);
console.log(minhaIdade);
console.log(meuCachorro);

/*
Tipos de variaveis:
Em JS não é necessario especificar o tipo de variavel.
bastar indicar a palavra reservada var;
*/
//Numero - Declarado sem aspas - float usa ponto
var numeroInteiro = 789;
var numeroFloat = 78.90;

//String - pode ser declarada com aspas simples '' ou duplas ""
var string = "Meu texto eu escrivo aqui";

//booleans - tem valor true ou false - usado em testes
var ativo = true;
var teste = 10 < 7;
console.log(teste);

//Arrays - começam na posição [0]
var frutas = ['Morango', 'Manga', 'Melancia'];
var megaCena = [2,15,6,3,45,8];
console.log(frutas[2], megaCena[4]);

//Objetos - Acessa a propriedade do objeto atraves do . - objeto.propriedade
var automovel = {modelo: "Fiesta", marca: "Ford", ano: 2018};
console.log(automovel.modelo, automovel.marca, automovel.ano);

//Digitação permissiva
var meuNumero = '500'; // opa, isso continua sendo uma string
console.log(typeof(meuNumero));
meuNumero = 500; // bem melhor — agora isso é um número
console.log(typeof(meuNumero));
