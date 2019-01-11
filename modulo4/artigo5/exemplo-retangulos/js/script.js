var canvas = document.querySelector('.myCanvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);

ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.fillRect(50, 50, 100, 150);

ctx.fillStyle = 'rgb(0, 255, 0)';
ctx.fillRect(75, 75, 100, 100);

ctx.fillStyle = 'rgba(255, 0, 255, 0.75)';
ctx.fillRect(25, 100, 175, 150);

ctx.fillStyle = 'rgba(0,191,255, 0.75)';
ctx.fillRect(10, 25, 175, 100);

ctx.fillStyle = 'rgba(255,255,255, 0.75)';
ctx.fillRect(35, 100, 200, 75);

ctx.strokeStyle = 'rgb(255, 255, 255)';
ctx.strokeRect(25, 25, 175, 200);

ctx.lineWidth = 5;