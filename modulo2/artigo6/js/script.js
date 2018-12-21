var btn = document.querySelector('button');

function random(num) {
    return Math.floor(Math.random() + (num + 1));
}

function bgChange() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;

