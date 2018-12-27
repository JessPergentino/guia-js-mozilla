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

var pessoa1 = new Pessoa("Jessica", "Pergentino", 21, "Feminino", ["Músicas", "Jogos", "Programação", "Series"]);
console.log(pessoa1.nome.primeiro);
console.log(pessoa1.nome.ultimo);
console.log(pessoa1.idade);
console.log(pessoa1.sexo);
console.log(pessoa1.interesses[0]);
console.log(pessoa1.bio());
console.log(pessoa1.saudacao());

//Outras maneiras de criar Instancias
var pessoa2 = new Object();
pessoa2.nome = "Pessoa 2";
pessoa2.idade = 22;
pessoa2.saudacao = function(){
    alert("Ola, eu sou " + this.nome + ".")
}

var pessoa3 = new Object({
    nome: "Pessoa 3",
    idade: 33,
    saudacao: function(){
        alert("Ola, eu sou " + this.nome + ".")
    }
});

//Método create()
var pessoa4 = Object.create(pessoa3);
console.log(pessoa4.nome);
console.log(pessoa4.saudacao());
