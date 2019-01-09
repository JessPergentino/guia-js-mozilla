var select = document.querySelector('select');
var pre = document.querySelector('pre');

select.onchange = function(){
    var verso = select.value;
    atualizarDisplay(verso);
}

function atualizarDisplay(verso){
    verso = verso.replace(" ", "");
    verso = verso.toLowerCase();
    var url = "textos/" + verso + ".txt";

    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.responseType = "text";
    request.onload = function(){
        pre.textContent = request.response;
    };
    request.send();
};

atualizarDisplay("Verso 1");
select.value = "Verso 1";