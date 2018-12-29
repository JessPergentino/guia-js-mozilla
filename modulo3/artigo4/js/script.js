/*var input = document.querySelector('input');
var btn = document.querySelector('button');
var para = document.querySelector('p');

btn.onclick = function () {
    var code = input.value;
    para.textContent = eval(code);
}
*/
function Pessoa(primeiro, ultimo, idade, sexo, interesses) {
    this.nome = {
        primeiro,
        ultimo
    };
    this.idade = idade;
    this.sexo = sexo;
    this.interesses = interesses;
}

Pessoa.prototype.bio = function () {
    var texto = this.nome.primeiro + " " + this.nome.ultimo + " tem " + this.idade + " anos de idade. ";
    var pronome;
    if (this.sexo === "Feminino" || this.sexo === "F" || this.sexo === "feminino") {
        pronome = "Ela gosta de ";
    } else {
        pronome = "Ele gosta de "
    }
    texto += pronome;
    for (var i = 0; i < this.interesses.length; i++) {
        if (i === this.interesses.length - 1) {
            texto += this.interesses[i] + ".";
        } else if (i === this.interesses.length - 2) {
            texto += this.interesses[i] + " e "
        } else {
            texto += this.interesses[i] + ", "
        }
    }
    alert(texto);
}

Pessoa.prototype.saudacao = function () {
    alert("Ola! Eu sou " + this.nome.primeiro + ".");
}

Pessoa.prototype.despedida = function () {
    alert(this.nome.primeiro + " está indo embora. Até a próxima!!")
}

var pessoa1 = new Pessoa("João", "Santos", 45, "Masculino", ["Jogos", "Esportes"]);

//Função contrutora Professor
function Professor(primeiro, ultimo, idade, sexo, interesses, materias) {
    Pessoa.call(this,primeiro, ultimo, idade, sexo, interesses);
    this.materias = materias;
}
//Personalisando a saudação
Professor.prototype.saudacao = function () {
    var prefixo;
    if (this.sexo === "Masculino" || this.sexo === "masculino" || this.sexo === "M" || this.sexo === "m") {
        prefixo = "Sr. ";
    } else if (this.sexo === "Feminino" || this.sexo === "feminino" || this.sexo === "F" || this.sexo === "f") {
        prefixo = "Sra. "
    } else {
        prefixo = "Sx. "
    }

    alert("Olá. Meu nome é " + prefixo + " " + this.nome.ultimo + ", e eu ensino " + this.materias + ".");
}

//Construtor sem paramwtro
function Bloco() {
    this.largura = 10;
    this.altura = 20;
}

function BlocoAzul() {
    Bloco.call();
    this.opacidade = 0.5;
    this.cor = "Azul";
}

//Referencia de prototipo e construtor
Professor.prototype = Object.create(Pessoa.prototype);
console.log(Professor.prototype.constructor);

Object.defineProperty(Professor.prototype, "constructor", {
    value: Professor,
    enumerable: false,
    writable: true
});
Professor.prototype.constructor = Professor;
console.log(Professor.prototype.constructor);

var prof = new Professor("Fernando", "Borges", 47, "Masculino", ["Programar"], "LPA");

console.log(prof.nome.primeiro);
console.log(prof.bio());
console.log(prof.saudacao());
console.log(prof.despedida());
console.log(prof.materias);

//Criando um aluno
function Aluno (primeiro,ultimo,idade,sexo,interesses){
    Pessoa.call(this,primeiro,ultimo,idade,sexo,interesses);
}

//Referencia de prototipo e construtor
Aluno.prototype = Object.create(Pessoa.prototype);
console.log(Aluno.prototype.constructor);

Object.defineProperty(Aluno.prototype, "constructor", {
    value: Aluno,
    enumerable: false,
    writable: true
});
Aluno.prototype.constructor = Aluno;
console.log(Aluno.prototype.constructor)

Aluno.prototype.saudacao = function(){
    alert("Meu nome é " + this.nome.primeiro + "!")
}

var aluno = new Aluno("Jessica", "Pergentino", 21,"Feminino",["Programar", "Musicas", "Jogos"]);

console.log(aluno.nome.primeiro);
console.log(aluno.bio());
console.log(aluno.saudacao());
console.log(aluno.despedida());

