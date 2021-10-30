//variables globales
var posx;
var posy;
let bg,bg2,bg3,bg4;
let walls;
let cantObstaculos;
let cantPuntos;
let cantLluvia;
let estado;

//Clases
let personaje;
let escenario;
let obstaculos = [];
let puntos = [];
let lluvia = [];

//Animaciones
let standing;
let walkRight;
let walkLeft;

function preload() {
  //Cargo imagenes astronauta
  standing = loadAnimation('img/astro0.png');
  walkRight = loadAnimation("img/astro1.png", "img/astro2.png", "img/astro3.png");
  walkLeft = loadAnimation("img/astro4.png", "img/astro5.png", "img/astro6.png");
  //niveles
  bg = loadImage('img/background.png');
  bg2 = loadImage('img/background2.png');
  bg3 = loadImage('img/background3.png');
  bg4 = loadImage('img/background4.png');
  walls = loadImage('img/walls.png');
  //obstaculos
  obstimg = loadImage('img/rock.png');
  moco = loadImage('img/moco.png');
  //sonidos
  picar = loadSound("sound/picar.mp3");
  ruido = loadSound("sound/ruido.mp3");
  cueva = loadSound("sound/cueva.mp3");
}

function setup() {
  noCursor();
  createCanvas(1300, 600);
  estado = "menu";

  //Cantidad de particulas, mocos y puntos negros
  cantLluvia = 50;
  cantObstaculos = 10;
  cantPuntos = 3;

  //Declaro clases
  personaje = new Personaje();
  escenario = new Escenario();
  for (let i = 0; i < cantObstaculos; i++) {
    obstaculos.push(new Obstaculos());
  }
  for (let i = 0; i < cantLluvia; i++) {
    lluvia.push(new Lluvia());
  }
  for (let i = 0; i < cantPuntos; i++) {
    puntos.push(new Puntos());
  }
}

function draw() {
  if (estado == "menu") {
    background(255, 0, 0);
    textAlign(CENTER, CENTER);
    textSize(28);
    text("Jugar", width / 2, height / 2);
    fill(20);
    ellipse(mouseX, mouseY, 5, 5);
    if (mouseIsPressed) {
      if (mouseX > width / 2 - 40 && mouseX < width / 2 + 40 && mouseY > height / 2 - 25 && mouseY < height / 2 + 25) estado = "nivel1";
    }
  }


  if (estado == "nivel1") {
    //efecto movimiento camara
    if(posx<2600){
      translate(-posx, 0);      
    } else{
      translate(-2600, 0); 
    }
    
    background(0, 0, 0);
    //Reproduce música de fondo
    if (!cueva.isPlaying()) {
      cueva.play();
    }
    escenario.nivel1();

    for (let i = 0; i < cantPuntos; i++) {
      puntos[i].display();
    }
    for (let i = 0; i < cantLluvia; i++) {
      lluvia[i].display();
      lluvia[i].llover();
    }
    for (let i = 0; i < cantObstaculos; i++) {
      obstaculos[i].display();

    }

    personaje.draw();
    personaje.mover();
    personaje.pegado();

    //Cursor
    fill(20);
    ellipse(mouseX + posx, mouseY, 5, 5);


    //cambio nivel2 //boca
    //transparencia
    if(posx > 2600){
      fill(200, 200, 200, 40);      
      ellipse(width*3-400, 200, 100, 100);
    }
    if (keyDown('w')) {
      if(posx >3200 && posx<3300 && personaje.y < 280){

        estado = "nivel2"
        personaje.reset();
        console.log(estado);  
      }
    } 
    
    //cambio nivel3 //traquea
    //transparencia
    if(posx > 2600){
      fill(200, 200, 200, 40);      
      rect(width*3-100, 260, width*3, height);
    }
    if (keyDown('d')) {
      if(posx >3670 && personaje.y < 500 && personaje.y >360){

        estado = "nivel3"
        personaje.reset();
        console.log(estado);  
      }
    }  
    
  }

  if (estado == "nivel2") {

    //efecto movimiento camara
    if(posx<2600){
      translate(-posx, 0);      
    } else{
      translate(-2600, 0); 
    }
    
    background(0, 0, 0);
    //Reproduce música de fondo
    if (!cueva.isPlaying()) {
      cueva.play();
    }
    escenario.nivel2();
    personaje.draw();
    personaje.mover();
    personaje.pegado();

    //Cursor
    fill(20);
    ellipse(mouseX + posx, mouseY, 5, 5);

    //cambio nivel4 - final
    //transparencia
    if(posx > 2600){
      fill(200, 200, 200, 40);      
      rect(width*3-100, 260, width*3, height);
    }
    if (keyDown('d')) {
      if(posx >3670 && personaje.y < 500 && personaje.y >360){

        estado = "nivel4"
        personaje.reset();
        console.log(estado);  
      }
    }

  }

  if (estado == "nivel3") {

    //efecto movimiento camara
    if(posx<2600){
      translate(-posx, 0);      
    } else{
      translate(-2600, 0); 
    }
    
    background(0, 0, 0);
    //Reproduce música de fondo
    if (!cueva.isPlaying()) {
      cueva.play();
    }
    escenario.nivel3();
    personaje.draw();
    personaje.mover();
    personaje.pegado();

    //Cursor
    fill(20);
    ellipse(mouseX + posx, mouseY, 5, 5);

    //cambio nivel4 - final
    //transparencia
    if(posx > 2600){
      fill(200, 200, 200, 40);      
      rect(width*3-100, 260, width*3, height);
    }
    if (keyDown('d')) {
      if(posx >3670 && personaje.y < 500 && personaje.y >360){

        estado = "nivel4"
        personaje.reset();
        console.log(estado);  
      }
    }
  }

  if (estado == "nivel4") {
    //efecto movimiento camara
    if(posx<2600){
      translate(-posx, 0);      
    } else{
      translate(-2600, 0); 
    }
    
    background(0, 0, 0);
    //Reproduce música de fondo
    if (!cueva.isPlaying()) {
      cueva.play();
    }
    escenario.nivel4();
    personaje.draw();
    personaje.mover();
    personaje.pegado();

    //Cursor
    fill(20);
    ellipse(mouseX + posx, mouseY, 5, 5);   

  }

}

function mousePressed() {
  for (let i = 0; i < cantPuntos; i++) {
    puntos[i].click();
  }
}
