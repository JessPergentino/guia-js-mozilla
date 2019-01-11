var canvas = document.querySelector('.myCanvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);

var image = new Image();
image.src = 'img/firefox.png';

image.onload = function() {
    ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175);
  }

  