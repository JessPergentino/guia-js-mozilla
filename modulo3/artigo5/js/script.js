var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
// Instancia do objeto de requisição
var request = new XMLHttpRequest();
//Abrindo nova requisição nesta url pelo metodo get
request.open('GET', requestURL);
//especifica o tipo da resposta - request.responseType = 'text'; - devolce uma string
request.responseType = 'json';
//envia a rquisição
request.send();

//monipulando o evento onload - acionado quando a resposta é retornada com sucesso;
request.onload = function () {
    //guardando e manipulando a resposta
    /*
        var superHeroesText = request.response; - pega a string como resposta
        var superHeroes = JSON.parse(superHeroesText); - Tranforma em um objeto
     */
    var superHerois = request.response;
    popularHeader(superHerois);
    mostrarHerois(superHerois);
}

//Preenchendo o cabeçalho
function popularHeader(jsonObj) {
    var h1 = document.createElement('h1');
    h1.textContent = jsonObj['squadName'];
    header.appendChild(h1);

    var p = document.createElement('p');
    p.textContent = "Hometown: " + jsonObj['homeTown'] + '// Formed: ' + jsonObj['formed'];
    header.appendChild(p);
}

//Informações dos Herois
function mostrarHerois(jsonObj) {
    var herois = jsonObj['members'];

    for (var i = 0; i < herois.length; i++) {
        var article = document.createElement('article');
        var h2 = document.createElement('h2');
        var p1 = document.createElement('p');
        var p2 = document.createElement('p');
        var p3 = document.createElement('p');
        var lista = document.createElement('ul');

        h2.textContent = herois[i].name;
        p1.textContent = "Identidade Secreta: " + herois[i].secretIdentity;
        p2.textContent = "Idade: " + herois[i].age;
        p3.textContent = "Superpoderes:";

        var superPoderes = herois[i].powers;
        for (var j = 0; j < superPoderes.length; j++) {
            var item = document.createElement('li');
            item.textContent = superPoderes[j];
            lista.appendChild(item);
        }

        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        article.appendChild(lista);

        section.appendChild(article);
    }
}

//convertendo objeto em string
var json = {"nome": "Jessica", "idade": "21"};
console.log(json);
var string = JSON.stringify(json);
console.log(string);