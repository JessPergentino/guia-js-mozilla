var canvas = document.querySelector('.myCanvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);