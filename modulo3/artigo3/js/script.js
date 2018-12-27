//Função construtora
function Pessoa(primeiro, ultimo, idade, sexo, interesses) {
    this.nome = {
        primeiro: primeiro,
        ultimo: ultimo
    };
    this.idade = idade;
    this.sexo = sexo;
    this.interesses = interesses;
    this.bio = function () {
        var texto = this.nome.primeiro + " " + this.nome.ultimo + " tem " + this.idade + " anos de idade. ";
        var pronome;
        if (this.sexo === "Feminino" || this.sexo === "F" || this.sexo === "feminino") {
            pronome = "Ela gosta de ";
        } else {
            pronome = "Ele gosta de "
        }
        texto += pronome;
        for (var i = 0; i < interesses.length; i++) {
            if (i === interesses.length - 1) {
                texto += interesses[i] + ".";
            } else if (i === interesses.length - 2) {
                texto += interesses[i] + " e "
            } else {
                texto += interesses[i] + ", "
            }
        }
       var p = document.createElement('p');
       p.textContent = texto;
       document.body.appendChild(p)
        alert(texto);
    }
    this.saudacao = function () {
        alert("Ola! Eu sou " + this.nome.primeiro + ".");
    }
}

var pessoa1 = new Pessoa("João", "Santos", 45, "Masculino", ["Jogos", "Esportes"]);

//Propriedade de Object
console.log(pessoa1.valueOf());

//Propriedades do Prototipo
console.log(Pessoa.prototype);
console.log(Object.prototype);

//create()
var pessoa2 = Object.create(pessoa1);
console.log(pessoa2.__proto__);

//Propriedade do Construtor
console.log(pessoa1.constructor);
console.log(pessoa2.constructor);

var pessoa3 = new pessoa1.constructor("Maria", "Souza", 34, "Feminino", ["Moda", "Novela"]);
console.log(pessoa3.nome.primeiro);
console.log(pessoa3.nome.ultimo);
console.log(pessoa3.idade);
console.log(pessoa3.interesses[1]);

console.log(pessoa1.constructor.name);

//Modiicando Prototipos
Pessoa.prototype.despedida = function(){
    console.log(this.nome.primeiro + " teve que ir. Até a próxima!!");
}

pessoa1.despedida();