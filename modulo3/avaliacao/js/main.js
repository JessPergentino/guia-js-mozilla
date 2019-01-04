// setup canvas
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var p = document.querySelector('p');
var cont = 0;

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// Grear numero aleatorio
function random(min, max) {
    var num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

//Modelando a forma base de circulo
function Forma(x, y, velX, velY, existe) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.existe = existe;
}

//Modelando a Bola
function Bola(x, y, velX, velY, existe, cor, tamanho) {
    Forma.call(this, x, y, velX, velY, existe);
    this.cor = cor;
    this.tamanho = tamanho;
}

//Definindo as propriedades da herança
Bola.prototype = Object.create(Forma.prototype);
Object.defineProperty(Bola.prototype, "constructor", {
    value: Bola,
    enumerable: false,
    writable: true
});
Bola.prototype.constructor = Bola;

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

//Modelando o circulo do mal
function CirculoMal(x, y, existe) {
    Forma.call(this, x, y, 20, 20, existe);
    this.cor = 'white';
    this.tamanho = 10;
}

CirculoMal.prototype = Object.create(Forma.prototype);
Object.defineProperty(CirculoMal.prototype, "constructor", {
    value: CirculoMal,
    enumerable: false,
    writable: true
});
CirculoMal.prototype.constructor = CirculoMal;

//Metodo desenhar
CirculoMal.prototype.desenhar = function () {
    ctx.beginPath();
    ctx.strokeStyle = this.cor;
    ctx.lineWidth = 3;
    ctx.arc(this.x, this.y, this.tamanho, 0, 2 * Math.PI);
    ctx.stroke();
};

//Metodo de atualização
CirculoMal.prototype.update = function () {
    if ((this.x + this.tamanho) >= width) {
        this.velX -= this.tamanho;
    }
    if ((this.x - this.tamanho) <= 0) {
        this.velX += this.tamanho;
    }
    if ((this.y + this.tamanho) >= height) {
        this.velY -= this.tamanho;
    }
    if ((this.y - this.tamanho) <= 0) {
        this.velY += this.tamanho;
    }
};

//Controles
CirculoMal.prototype.controles = function () {
    var _this = this;
    window.onkeydown = function (e) {
        var keyW = 87;
        var keyS = 83;
        var keyA = 65;
        var keyD = 68;
        if (e.keyCode === keyA) {
            _this.x -= _this.velX;
        } else if (e.keyCode === keyD) {
            _this.x += _this.velX;
        } else if (e.keyCode === keyW) {
            _this.y -= _this.velY;
        } else if (e.keyCode === keyS) {
            _this.y += _this.velY;
        }
    }
}

CirculoMal.prototype.detectarColisao = function () {
    for (var j = 0; j < bolas.length; j++) {
        if (bolas[j].existe) {
            var dx = this.x - bolas[j].x;
            var dy = this.y - bolas[j].y;
            var distancia = Math.sqrt(dx * dx + dy * dy);
            if (distancia < this.tamanho + bolas[j].tamanho) {
                bolas[j].existe = false;
                cont--;
                p.textContent = 'Contagem das Bolas: ' + cont;
            }
        }

    }
}

//Armazenando as bolas
var bolas = [];

var circulo = new CirculoMal(
    random(0,width),
    random(0,height),
    true
);
circulo.controles();

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    while (bolas.length < 25) {
        var tamanho = random(10, 20);
        var bola = new Bola(
            random(0 + tamanho, width - tamanho),
            random(0 + tamanho, height - tamanho),
            random(-7, 7),
            random(-7, 7),
            true,
            'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
            tamanho
        );
        bolas.push(bola);
        cont++;
        p.textContent = 'Contagem das Bolas: ' + cont;
    }

    for (var i = 0; i < bolas.length; i++) {
        if (bolas[i].existe) {
            bolas[i].desenhar();
            bolas[i].update();
            bolas[i].detectarColisao();
        }
    }

    circulo.desenhar();
    circulo.update();
    circulo.detectarColisao();

    requestAnimationFrame(loop);
}

loop();