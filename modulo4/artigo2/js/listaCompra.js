var ul = document.querySelector('ul');
var input = document.querySelector('input');
var button = document.querySelector('button');

button.onclick = function(){
    var entrada = input.value;
    input.value = "";

    var li = document.createElement('li');
    var span = document.createElement('span');
    var btn = document.createElement('button');

    li.appendChild(span);
    li.appendChild(btn);
    
    span.textContent = entrada;
    btn.textContent = "Excluir";

    ul.appendChild(li);
    btn.onclick = function(){
        li.parentElement.removeChild(li);
    }

    input.focus();

}