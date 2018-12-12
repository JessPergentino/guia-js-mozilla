var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

var campoPalpite = document.querySelector('.campoPalpite');
var envioPalpite = document.querySelector('.envioPalpite');

envioPalpite.addEventListener("click", conferirPalpite);

var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');

var contagemPalpite = 1;
var botaoReinicio;

campoPalpite.focus();

function conferirPalpite() {
    var palpiteJogador = Number.parseInt(campoPalpite.value);
    if (contagemPalpite === 1) {
        palpites.textContent = "Palpites anteriores: ";
    }
    palpites.textContent += palpiteJogador + ' ';

    if (palpiteJogador === numeroAleatorio) {
        ultimoResultado.textContent = "Parabéns! Você Acertou Miseravi!!!"
        ultimoResultado.style.backgroundColor = "green";
        ultimoResultado.style.color = `white`;
        baixoOuAlto.textContent = "";
        configFimDeJogo();
    } else if (contagemPalpite === 10) {
        ultimoResultado.textContent = "!!!GAME OVER!!!";
        baixoOuAlto.textContent = "";
        configFimDeJogo();
    } else {
        ultimoResultado.textContent = "ERRADO!";
        ultimoResultado.style.backgroundColor = "red";
        if (palpiteJogador < numeroAleatorio) {
            baixoOuAlto.textContent = "Seu palpite está BAIXO!";
        } else if (palpiteJogador > numeroAleatorio) {
            baixoOuAlto.textContent = "Seu palpite está ALTO!";
        }
    }

    contagemPalpite++;
    campoPalpite.value = "";
}

function configFimDeJogo() {

    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = "Iniciar Novo Jogo";
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo() {
    contagemPalpite = 1;

    var reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for (var i = 0; i < reiniciarParas.length; i++) {
        reiniciarParas[i].textContent = "";
    }

    botaoReinicio.parentNode.removeChild(botaoReinicio);

    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = "";

    ultimoResultado.style.backgroudColor = "white";

    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}