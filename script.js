var PLAYER_SPEED = 10;
var PLAYER_SIZE = 20;
var ENEMY_SPEED = 50;
var ENEMY_SIZE = 15;
var playerX;
var playerY;
var score;
var aKeyPressed;
var sKeyPressed;
var dKeyPressed;
var wKeyPressed;
var enemyArray = [];
var canvasObject = document.getElementById("myCanvas")
var canvasSurface = canvasObject.getContext("2d");
canvasSurface.canvas.width  = window.innerWidth;
canvasSurface.canvas.height = window.innerHeight;
