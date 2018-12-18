//Loops - For
const gatos = ['Sr. Patinha', 'Floquinho', 'Sr. Bigodes', 'Biggles', 'Amora'];
let info = "Meus gatos se chamam: ";
for (let i = 0; i < gatos.length; i++) {
    if (i === gatos.length - 1) {
        info += "e " + gatos[i] + ".";
    } else {
        info += gatos[i] + ", ";
    }
}
console.log(info);

//Break
const contatos = ["João:123456789", "Maria:987654321", "José:46789123", "Pedro:321456987"];
const parag = document.getElementById('paragBusca');
const input = document.getElementById('busca');
const btn = document.getElementById('btnBusca');

btn.addEventListener('click', function () {
    let nome = input.value;
    input.value = "";
    input.focus();
    for (let i = 0; i < contatos.length; i++) {
        let split = contatos[i].split(":");
        if (split[0] === nome) {
            parag.textContent = "O numero de " + split[0] + " é " + split[1] + ".";
            break;
        } else {
            parag.textContent = "Contato não encontrado"
        }
    }
})

//Continue
const numInput = document.getElementById("num");
const paragNum = document.getElementById("paragNum");
const num = Number.parseInt(numInput.value);
const btnNum = document.getElementById("btnNum");

btnNum.addEventListener('click', function () {
    for (let i = 1; i <= num; i++) {
        let raiz = Math.sqrt(i);
        if (Math.floor(raiz) !== raiz) {
            continue;
        }
        console.log(i + " ")
        paragNum.textContent += i + " ";
    }
})

//While
let i = 0;
info = "";
while (i < gatos.length) {
    if (i === gatos.length - 1) {
        info += 'e ' + gatos[i] + '.';
    } else {
        info += gatos[i] + ', ';
    }
    i++;
}
console.log(info);

//Do...while
i = 0;
info = "";
do {
    if (i === gatos.length - 1) {
        info += 'e ' + gatos[i] + '.';
    } else {
        info += gatos[i] + ', ';
    }
    i++;
} while (i < gatos.length)
console.log(info);