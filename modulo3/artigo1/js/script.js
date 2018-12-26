//Noções basicas de objeto

//Declaração literal
var pessoa = {
    nome: {
        primeiro: 'Jessica',
        ultimo: 'Pergentino'
    }
    ,
    idade: 21,
    sexo: 'Feminino',
    interesses: ['Música', 'Esportes', 'Programação'],
    bio: function () {
        alert(this.nome.primeiro + " " + this.nome.ultimo + " tem " + this.idade + " anos de idade. Ela gosta de " + this.interesses[0] + " e " + this.interesses[1] + ".");
    },
    saudacao: function () {
        alert("Oi! Eu sou " + this.nome.primeiro + ".");
    }
}
console.log(pessoa.nome.primeiro);
console.log(pessoa.nome.ultimo);
//Notação de colchete
console.log(pessoa['idade']);
console.log(pessoa.interesses[1]);
console.log(pessoa.bio());
console.log(pessoa.saudacao());

//Setando membros
pessoa.idade = 26;
pessoa['nome']['ultimo'] = "Batista"

console.log(pessoa['idade']);
console.log(pessoa.nome.ultimo);

//Criando novos
pessoa['olhos'] = "Castanho";
pessoa.despedida = function () {
    alert("Adeus a todos!")
}

console.log(pessoa.olhos);
console.log(pessoa.despedida());

//Criando propriedades dinamicamente
var inputProp = document.getElementById('prop');
var inputValor = document.getElementById('valor');

var btn = document.querySelector('button');

btn.onclick = function () {
    var meuValor = inputValor.value;
    var minhaProp = inputProp.value;
    pessoa[minhaProp] = meuValor;
    console.log(pessoa[minhaProp]);
}
