//Arquivo JS

// setup canvas
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// Grear numero aleatorio
function random(min, max) {
    var num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

//Modelando a Bola
function Bola(x, y, velX, velY, cor, tamanho) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.cor = cor;
    this.tamanho = tamanho;
}
//Metodo desenhar
Bola.prototype.desenhar = function () {
    ctx.beginPath();
    ctx.fillStyle = this.cor;
    ctx.arc(this.x, this.y, this.tamanho, 0, 2 * Math.PI);
    ctx.fill();
};

//Metodo de atualização
Bola.prototype.update = function () {
    if ((this.x + this.tamanho) >= width) {
        this.velX = -(this.velX);
    }
    if ((this.x - this.tamanho) <= 0) {
        this.velX = -(this.velX);
    }
    if ((this.y + this.tamanho) >= height) {
        this.velY = -(this.velY);
    }
    if ((this.y - this.tamanho) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
};

Bola.prototype.detectarColisao = function () {
    for (var j = 0; j < bolas.length; j++) {
        if (!(this === bolas[j])) {
            var dx = this.x - bolas[j].x;
            var dy = this.y - bolas[j].y;
            var distancia = Math.sqrt(dx * dx + dy * dy);
            if (distancia < this.tamanho + bolas[j].tamanho) {
                bolas[j].cor = this.cor = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
            }
        }

    }
}

//Armazenando as bolas

var bolas = [];

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.30)';
    ctx.fillRect(0, 0, width, height);

    while (bolas.length < 25) {
        var tamanho = random(10, 20);
        var bola = new Bola(
            random(0 + tamanho, width - tamanho),
            random(0 + tamanho, height - tamanho),
            random(-7, 7),
            random(-7, 7),
            'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
            tamanho
        );
        bolas.push(bola);
    }

    for (var i = 0; i < bolas.length; i++) {
        bolas[i].desenhar();
        bolas[i].update();
        bolas[i].detectarColisao();
    }

    requestAnimationFrame(loop);
}

loop();