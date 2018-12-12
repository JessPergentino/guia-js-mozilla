// criando um array
var compras = ["Pão", "Leite", "Queijo", "Presunto"];
console.log(compras);

var sequencia = [11,25,36,20,2,1,5];
console.log(sequencia);

var aleatorio = ["asca", 123, true, ["a", "b", "c"]];
console.log(aleatorio);

//Acessando e modificando um array
console.log(compras[3]);
compras[1] = "Ketchup";
console.log(compras);
console.log(aleatorio[3][1]);

//Comprimento do array
console.log(sequencia.length);
for (let index = 0; index < sequencia.length; index++) {
    console.log(sequencia[index]);
}

//Metodos Uteis
//Convertando String e Array
var cidades = "Salvador,São Paulo,Rio de Janeiro,New York,Liverpool,London,Manchester";
var array = cidades.split(",");
console.log(array)
console.log(array.length);
console.log(array[0]);
console.log(array[1]);
console.log(array[array.length-1]);

var array2 = array.join(";");
console.log(array2)
console.log(array.toString());

//Adicionando e Removendo Itens
compras.push("Mostarda");
console.log(compras);
compras.push("Azeitona", "Maionese");
console.log(compras);
var novoTamanho = compras.push("Picles");
console.log(novoTamanho, compras);

compras.pop();
console.log(compras);

var itemRemovido = compras.pop();
console.log(itemRemovido, compras);

compras.unshift("Barbecue");
console.log(compras);

var item = compras.shift();
console.log(item,compras);