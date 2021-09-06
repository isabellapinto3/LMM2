let anatomy = [];
let pulmones = [];

let picar;
let ruido;
let fondo;

var x;
var y;
var ancho;
var alto;
var click;
var cant = 5;

var contador;
var contador2;

var estado;
var muerto;

function preload() {
  //for(int i = 0 ; i<cant ;i++){
  //  anatomy[i]=loadImage("img/anatomy"+i+".png")
  //}
  anatomy[0] = loadImage("img/anatomy0.png");
  anatomy[1] = loadImage("img/anatomy1.png");
  anatomy[2] = loadImage("img/anatomy2.png");
  anatomy[3] = loadImage("img/anatomy3.png");
  anatomy[4] = loadImage("img/anatomy4.png");
  anatomy[5] = loadImage("img/anatomy5.png");

//imagenes pulmones
  pulmones[0] = loadImage("img/0.png");
  pulmones[1] = loadImage("img/1.png");
  pulmones[2] = loadImage("img/2.png");
  pulmones[3] = loadImage("img/3.png");
  pulmones[4] = loadImage("img/4.png");
  pulmones[5] = loadImage("img/5.png");
  pulmones[6] = loadImage("img/6.png");
  pulmones[7] = loadImage("img/7.png");
  pulmones[8] = loadImage("img/8.png");
  pulmones[9] = loadImage("img/9.png");

}

function setup() {
  picar = loadSound("sound/picar.mp3");
  ruido = loadSound("sound/ruido.mp3");
  fondo = loadSound("sound/fondo.mp3")

  x = 0;
  y = 0;
  ancho = 600;
  alto = 700;
  click = false;
  muerto = false;
  contador = 0;
  contador2 = 0;
  estado = 0;
  createCanvas(600, 700);

}

function draw() {
  background(20);
  fill(255);

  //estado inicio
  if (estado == 0){
    for (i = 0; i < anatomy.length; i++) {
      anatomy[i].resize(600, 0);
    }
    image(anatomy[0], x, y);
  }

  //estado pulmones cambiando
  if(estado == 1){

    //fondo.play();
    image(anatomy[1], x, y);
    image(pulmones[contador2], x, y);

  }

  //estado muerto
  if(estado == 2){
    image(anatomy[5], x, y);
  }

  if (mouseX > 253 && mouseX < 279 && mouseY > 314 && mouseY < 342) {
    fill(255, 70);
    ellipseMode(CENTER);
    noStroke();
    ellipse(253, 314, 50, 50);
  }
}

function mousePressed() {
  if (mouseX > 253 && mouseX < 279 && mouseY > 314 && mouseY < 342) {
    click = true;
    picar.play();
    estado = 1;
    /*
    if(contador<5){
      contador+=1;
      estado =1;
    }*/
  }

  if (estado == 1){
    if (mouseX > 50 && mouseX < 550 && mouseY > 200 && mouseY < 500) {
      ruido.play();
      picar.play();
      contador2+=1;

    }
    if(contador2>9){
      estado = 2;
    }
    if(conrtador2 < 3){
      ruido.play();
    }

  }
}
