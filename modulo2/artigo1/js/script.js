// Declarando If e Else
var ativo = false;
if(ativo){
    console.log("Está ativo");
} else {
    console.log("Não está ativo");
}

// else if

var select1 = document.getElementById('tempo');
var parag = document.querySelector('p');

select1.addEventListener('change', mudarTempoSwitch);

function mudarTempo(){
    var escolha = select1.value;

    if(escolha === "sol"){
        //Aninahando Ifs e else
        var temperatura = 37;
        if (temperatura < 36){
            parag.textContent = "Está " + temperatura + " graus Lá fora - Isso é legal e o dia está ensolarado lá fora. Calções! Vá para a praia ou parque ou pegue um sorvete. ";
        } else if(temperatura >= 36){
            parag.textContent = "Está " + temperatura + " graus Lá fora ESTA RELAMENTE QUENTE!! - Isso é legal e o dia está ensolarado lá fora. Calções! Vá para a praia ou parque ou pegue um sorvete. ";
        }
        
    } else if(escolha === "chuva"){
        parag.textContent = "A chava cai lá fora; pegue uma capa de chuva e um guarda-chuva, e não fique muito tempo fora";
    } else if(escolha === "neve"){
        parag.textContent = "A neve está caindo - Está congelando! Melhor ficar com uma xicara de Chocolate Quente, ou ir construir um boneo de neve.";
    }else if (escolha === "nuvem"){
        parag.textContent = "Não está chovendo, mas o ceu está cinza e sombrio; Poderia virar a qualquer momento, então pegue a capa de chuva para o caso";
    }
}

//Operadores Logicos
var situacao = true;
var salario = 2500;
// AND
if(situacao && salario >= 2500){
    console.log("O funcionario está ativo recebendo " + salario);
} else if(situacao && salario < 2500){
    console.log("O funcionario está ativo e recebe menos de 2500");
}
//OR
if(situacao || salario >= 2500){
    console.log("O funcionario recebe " + salario);
} else if(situacao || salario < 2500){
    console.log("O funcionario recebe menos de 2500");
}
//NOT
if(!(situacao || salario >= 2500)){
    console.log("O funcionario recebe " + salario);
} else if(situacao || salario < 2500){
    console.log("O funcionario recebe menos de 2500");
}

//switch
function mudarTempoSwitch(){
    var escolha = select1.value;

  switch (escolha) {
    case 'sol':
      parag.textContent = "Isso é legal e o dia está ensolarado lá fora. Calções! Vá para a praia ou parque ou pegue um sorvete. ";
      break;
    case 'chuva':
      parag.textContent = "A chava cai lá fora; pegue uma capa de chuva e um guarda-chuva, e não fique muito tempo fora";
      break;
    case 'neve':
      parag.textContent = "A neve está caindo - Está congelando! Melhor ficar com uma xicara de Chocolate Quente, ou ir construir um boneo de neve.";
      break;
    case 'nuvem':
      parag.textContent = "Não está chovendo, mas o ceu está cinza e sombrio; Poderia virar a qualquer momento, então pegue a capa de chuva para o caso";
      break;
    default:
      parag.textContent = '';
  }
}

//Operador Ternario
var ehAniversario = true;
var saudacao = (ehAniversario) ? "Parabens!! Nós desejamos em otimo dia" : "Bom dia!";

var select2 = document.getElementById('tema');
var html = document.querySelector('html');

document.body.style.padding = '10px';
function update(bgColor,textColor){
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

select2.onchange = function(){
    (select2.value === "preto") ? update('black','white') : update('white','black');
}