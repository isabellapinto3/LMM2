//variables globales
var posx;
let astroimg = [];
let bg;

//Clases
let personaje;
let escenario;

function preload() {
  //Cargo imagenes astronauta
  for(let i = 0;i<3;i++){
    astroimg[i]=loadImage('img/astro'+i+'.png')
  }
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
