// pegando referencia do elemento da dom
//queryselector() metodo mais novo que usa seletores css - pega o primeiro elemento - queryselectorall() pega todos
var link = document.querySelector('a');
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

//Criando novos elementos
//referencia para seção
var sect = document.querySelector('section');
//Novo pargrafo
var para = document.createElement('p');
para.textContent = "Nós esperamos que você tenha gostado do passeio.";

//Adiciona o elemento criado ao final da seção
sect.appendChild(para);

//Criando um node de texto
var texto = document.createTextNode("- a principal fonte de conhecimento sobre desenvolvimento web.");
var linkPara = document.querySelector('p');
linkPara.appendChild(texto);

//Movendo e Removendo Elementos
//Move o paragrafo com o link para a parte inferior da seção
sect.appendChild(linkPara);
//Removendo o linkPara
//Removendo com a referencia do no pai - sect.removeChild(linkPara);
//Removendo com a propria referencia
linkPara.parentNode.removeChild(linkPara);

//Manipulando estilos - no JS
/*
para.style.color = "white";
para.style.backgroundColor = "black"
para.style.padding = "10px"
para.style.width = "250px"
para.style.textAlign = "center"
*/
//Manipulando estilos - no HTML
para.setAttribute('class', 'highlight');