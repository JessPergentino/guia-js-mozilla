//Invocando Funções
function minhaFunção(){
    alert("Hello")
}
minhaFunção();

//Função Anonim
var meuBotao = document.getElementById('btn');

meuBotao.onclick = function(){
    alert("Hello!")
}

//Parametro
var text = "Eu sou uma String";
var novoText = text.replace("String", "Salsicha");
console.log(novoText);

//Função dentro de Função
function myBigFunction() {
    var myValue = 1;
        
    subFunction1(myValue);
    subFunction2(myValue);
    subFunction3(myValue);
  }
  
  function subFunction1(value) {
    console.log(value);
  }
  
  function subFunction2(value) {
    console.log(value);
  }
  
  function subFunction3(value) {
    console.log(value);
  }
