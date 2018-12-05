//Função para criar paragrafos e colocar ao fim da página
function criarParagrafo() {
    var para = document.createElement('p');
    para.textContent = "Você cliclou no botão"
    document.body.appendChild(para);
}


    /* Alteração adicionar eventos em varios botões

    1. Captura referências de todos os botões na página e armazena isso em um array.
    2. Vai até todos os botões e adiciona um event listener click a cada um deles.

    Quando cada botão é clicado, a função criarParagrafo() será executada.
*/
    var botoes = document.querySelectorAll('button');

    for(var i = 0; i <botoes.length; i++){
        botoes[i].addEventListener('click', criarParagrafo);
    }
    