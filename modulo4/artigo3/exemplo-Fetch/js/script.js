var select = document.querySelector('select');
var pre = document.querySelector('pre');

select.onchange = function () {
    var verso = select.value;
    atualizarDisplay(verso);
}

function atualizarDisplay(verso) {
    verso = verso.replace(" ", "");
    verso = verso.toLowerCase();
    var url = "textos/" + verso + ".txt";

    fetch(url).then(function (response) {
        response.text().then(function (text) {
            pre.textContent = text;
        });
    });
};

atualizarDisplay("Verso 1");
select.value = "Verso 1";