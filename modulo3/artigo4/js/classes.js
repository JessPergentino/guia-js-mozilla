class Pessoa{
    constructor(primeiro, ultimo, idade, sexo, interesses){
        this.nome = {
            primeiro,
            ultimo
        };

        this.idade = idade;
        this.sexo = sexo;
        this.interesses = interesses;
    }

    saudacao(){
        console.log("Olá, eu sou " + this.nome.primeiro);
    }

    despedida(){
        console.log(this.nome.primeiro + " está indo embora. Até a próxima!!");
    }
}

var pessoa1 = new Pessoa("João", "Santos", 6,"Masculino",["Passear na floresta", "Comer Doces"]);
var pessoa2 = new Pessoa("Maria", "Santos", 5,"Feminino",["Passear na floresta", "Comer Doces"]);

pessoa1.saudacao();
pessoa2.despedida();

class Professor extends Pessoa{
    constructor(primeiro,ultimo,idade,sexo,interesses,grade,materia){
        super(primeiro,ultimo,idade,sexo,interesses);

        this._grade = grade;
        this._materia = materia;
    }

    get grade(){
        return this._grade;
    }

    set grade(novaGrade){
        this._grade = novaGrade;
    }

    get materia(){
        return this._materia;
    }

    set materia(novaMateria){
        this._materia = novaMateria;
    }
}


var professor1 = new Professor("Simor", "Skinner", 47,"Masculino",["Edna Grababel","Agradar a mamãe"],"Segunda a sexta","Diretor");

console.log(professor1.nome.primeiro);
console.log(professor1.nome.ultimo);
console.log(professor1.sexo);
console.log(professor1.grade);
console.log(professor1.materia);
professor1.saudacao();
professor1.despedida();

professor1.materia = "Matematica";
console.log(professor1.materia);