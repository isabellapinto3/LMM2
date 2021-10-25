//variables globales
var posx;
let bg;
let walls;

//Clases
let personaje;
let escenario;

//Animaciones
let standing;
let walkRight;
let walkLeft;

function preload() {
  //Cargo imagenes astronauta
  standing = loadAnimation('img/astro0.png');
  walkRight = loadAnimation("img/astro1.png","img/astro2.png", "img/astro3.png");
  walkLeft = loadAnimation("img/astro4.png","img/astro5.png", "img/astro6.png");
  bg = loadImage('img/background.png');
  walls = loadImage('img/walls.png');
}

function setup() {
  createCanvas(1300, 600);

  //Declaro clases
  personaje = new Personaje();
  escenario = new Escenario();
}

function draw() {
  translate(-posx, 0);
  background(255, 0, 0);

  escenario.draw();
  personaje.draw();
  personaje.mover();

}
