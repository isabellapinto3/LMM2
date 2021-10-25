//variables globales
var posx;
let astroimg = [];
let bg;

//Clases
let personaje;
let escenario;

function preload() {
  astroimg[0] = loadImage('img/astro0.png');

  astroimg[1] = loadImage('img/astro1.png');

  astroimg[2] = loadImage('img/astro2.png');
  bg = loadImage('img/background.png');
}

function setup() {
  createCanvas(1300, 600);

  //Declaro clases
  personaje = new Personaje();
  escenario = new Escenario();

}

function draw() {
  translate(-posx, 0);
  background(255,0,0);

  escenario.draw();
  personaje.draw();
  personaje.mover();

}
