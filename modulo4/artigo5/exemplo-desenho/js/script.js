var canvas = document.querySelector('.myCanvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);

ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.beginPath();
ctx.moveTo(50, 50);

ctx.lineTo(150, 50);
var triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(100, 50+triHeight);
ctx.lineTo(50, 50);
ctx.fill();

ctx.fillStyle = 'rgb(0, 0, 255)';
ctx.beginPath();
ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
ctx.fill();

ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
ctx.lineTo(200, 106);
ctx.fill();

function degToRad(degrees) {
    return degrees * Math.PI / 180;
  };