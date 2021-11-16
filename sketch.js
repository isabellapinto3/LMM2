//variables globales
var posx;
var posy;
let bg, bg2, bg3, bg4;
let hud;
let walls;
let cantObstaculos;
let cantPuntos;
let cantLluvia;
let estado;
let rock = [];
let hudcara = [];
let nubes = [];
let hudBarra;

//Clases
let personaje;
let boss;
let escenario;
let animacion;
let animacionFinal;
let controles;
let obstaculos = [];
let puntos = [];
let lluvia = [];

//Animaciones
let standing;
let walkRight;
let walkLeft;
let picaranimacion;

function preload() {
  //Cargo imagenes astronauta
  standing = loadAnimation('img/astro0.png');
  walkRight = loadAnimation("img/astro1.png", "img/astro2.png", "img/astro3.png");
  walkLeft = loadAnimation("img/astro6.png", "img/astro7.png", "img/astro8.png");
  picaranimacion = loadAnimation("img/astro4.png", "img/astro5.png");

  //Comic
  comic = loadImage("img/comic.png");

  //Chimenea
  chimenea = loadImage("img/chimenea.png");

  chimenea2 = loadImage("img/chimenea2.png");

  //Animacion final
  avionfrontal = loadImage("img/avion.png");
  festejo = loadImage("img/festejo.png");

  //hud
  hudBarra = loadImage('img/hud.png');
  hudtop= loadImage("img/hudtop.png");
  for (let i = 0; i < 6; i++) {
    hudcara[i] = loadImage("img/hudcara" + i + ".png");
  }
  for (let i = 0; i < 3; i++) {
    nubes[i] = loadImage("img/nubetoxica" + i + ".png");
  }

  //niveles
  bg = loadImage('img/background.png');
    bgTop = loadImage('img/backgroundtop.png');
  bg2 = loadImage('img/background2.png');
    bg2Top = loadImage('img/background2top.png');
  bg3 = loadImage('img/background3.png');
  bg3Top = loadImage('img/background3top.png');
  bg4 = loadImage('img/background4.png');
  walls = loadImage('img/walls.png');
  perdiste = loadImage("img/perdiste.png");
  menu = loadImage("img/menu.png");

  //obstaculos
  //obstimg = loadImage('img/rock0.png');
  for (let i = 0; i < 3; i++) {
    rock[i] = loadImage("img/rock" + i + ".png");
  }
  moco = loadImage('img/moco1.png');
  saliva = loadImage("img/saliva.png");

  //sonidos
  picar = loadSound("sound/picar.mp3");
  ruido = loadSound("sound/ruido.mp3");
  cueva = loadSound("sound/cueva.mp3");
  cueva2 = loadSound("sound/cueva2.mp3");
  tos = loadSound("sound/tos.mp3")
  maquina = loadSound("sound/maquina.mp3")
}

function setup() {
  noCursor();
  createCanvas(1300, 600);
  estado = "menu";
  nubes[0].resize(50, 50);

  nubes[1].resize(80, 80);

  nubes[2].resize(70, 70);
  //Cantidad de particulas, mocos y puntos negros
  cantLluvia = 40;
  cantObstaculos = 10;
  cantPuntos = 3;
  print(estado);

  //Declaro clases
  personaje = new Personaje();
  boss = new Boss();
  escenario = new Escenario();
  animacion = new Animacion();
  controles = new Controles();
  animacionFinal = new AnimacionFinal();
  hud = new Hud();

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
    escenario.menu();
    if (keyDown('ENTER')) {
      estado = "animacion";
    }
  }

  if (estado == "animacion") {
    animacion.display();
  }

  push()
  if (estado == "nivel1") {
    //efecto movimiento camara
    if(posx<2600){
      translate(-posx, 0);
    } else {
      translate(-2600, 0);
    }



    //translate(-posx, 0);
    background(0, 0, 0);
    //Reproduce música de fondo
    maquina.stop();
    if (!cueva.isPlaying()) {
      cueva.play();
    }
    escenario.nivel1();
    //obstaculos


    for (let i = 0; i < cantPuntos; i++) {
      puntos[i].display();
    }

    for (let i = 0; i < cantObstaculos; i++) {
      obstaculos[i].display();
    }

    personaje.draw();
    personaje.mover();
    personaje.pegado();
    personaje.llovido();

    for (let i = 0; i < cantLluvia; i++) {
      lluvia[i].display();
      lluvia[i].llover();
    }

    escenario.nivel1top();



    //cambio nivel2 //boca
    //transparencia
    if (posx > 2600) {
      fill(200, 200, 200, 40);
      ellipse(width * 3 - 400, 200, 100, 100);
    }
    if (keyDown('w')) {
      if (posx > 3200 && posx < 3650 && personaje.y < 280) {

        estado = "nivel2"
        personaje.reset();
        for (let i = 0; i < cantPuntos; i++) {
          puntos[i].reset();
        }

        for (let i = 0; i < cantObstaculos; i++) {
          obstaculos[i].reset();
        }
        console.log(estado);
      }
    }

    //cambio nivel3 //traquea
    //transparencia
    if (posx > 2600) {
      fill(200, 200, 200, 40);
      rect(width * 3 - 100, 260, width * 3, height);
    }
    if (keyDown('d')) {
      if (posx > 3670 && personaje.y < 600 && personaje.y > 250) {

        estado = "nivel3"
        personaje.reset();
        console.log(estado);
        for (let i = 0; i < cantPuntos; i++) {
          puntos[i].reset();
        }
        for (let i = 0; i < cantObstaculos; i++) {
          obstaculos[i].reset();
        }
      }
    }
    //Cursor
    fill(255);
    ellipse(mouseX + posx, mouseY, 5, 5);

  }

  if (estado == "nivel2") {

    //efecto movimiento camara
    if (posx < 2600) {
      translate(-posx, 0);
    } else {
      translate(-2600, 0);
    }

    background(0, 0, 0);
    //Reproduce música de fondo
    cueva.stop();
    if (!cueva2.isPlaying()) {
      cueva2.play();
    }

    escenario.nivel2();

    for (let i = 0; i < cantPuntos; i++) {
      puntos[i].display();
    }

    for (let i = 0; i < cantObstaculos; i++) {
      obstaculos[i].display();
    }

    personaje.draw();
    personaje.mover();
    personaje.pegado();
    personaje.llovido();

    for (let i = 0; i < cantLluvia; i++) {
      lluvia[i].display();
      lluvia[i].llover();
    }


    escenario.nivel2top();


    //Cursor
    fill(20);
    ellipse(mouseX + posx, mouseY, 5, 5);

    //cambio nivel4 - final
    //transparencia
    if (posx > 2600) {
      fill(200, 200, 200, 40);
      rect(width * 3 - 100, 260, width * 3, height);
    }
    if (keyDown('d')) {
      if (posx > 3670 && personaje.y < 600 && personaje.y > 250) {

        estado = "nivel4"
        personaje.reset();
        console.log(estado);
        for (let i = 0; i < cantPuntos; i++) {
          puntos[i].reset();
        }
        for (let i = 0; i < cantObstaculos; i++) {
          obstaculos[i].reset();
        }
        for (let i = 0; i < cantLluvia; i++) {
          lluvia[i].reset();
        }
      }
    }

  }

  if (estado == "nivel3") {
    //efecto movimiento camara
    if (posx < 2600) {
      translate(-posx, 0);
    } else {
      translate(-2600, 0);
    }

    background(0, 0, 0);
    //Reproduce música de fondo
    if (!cueva2.isPlaying()) {
      cueva2.play();
    }
    escenario.nivel3();
    for (let i = 0; i < cantObstaculos; i++) {
      obstaculos[i].display();
    }
    for (let i = 0; i < cantPuntos; i++) {
      puntos[i].display();
    }
    personaje.draw();
    personaje.mover();
    personaje.pegado();
    personaje.llovido();

    for (let i = 0; i < cantLluvia; i++) {
      lluvia[i].display();
      lluvia[i].llover();
    }
      escenario.nivel2top();
    //Cursor
    fill(20);
    ellipse(mouseX + posx, mouseY, 5, 5);

    //cambio nivel4 - final
    //transparencia
    if (posx > 2600) {
      fill(200, 200, 200, 40);
      rect(width * 3 - 100, 260, width * 3, height);
    }
    if (keyDown('d')) {
      if (posx > 3670 && personaje.y < 500 && personaje.y > 360) {

        estado = "nivel4"
        personaje.reset();
              for (let i = 0; i < cantPuntos; i++) {
                puntos[i].reset();
              }
              for (let i = 0; i < cantObstaculos; i++) {
                obstaculos[i].reset();
              }
              for (let i = 0; i < cantLluvia; i++) {
                lluvia[i].reset();
              }
        console.log(estado);
      }
    }
  }

  if (estado == "nivel4") {
    //efecto movimiento camara

    if(posx<1300){
      translate(-posx, 0);
    } else{
      translate(-1300, 0);

    }

    background(0, 0, 0);
    //Reproduce música de fondo
    cueva.stop();
    if (!maquina.isPlaying()) {
      maquina.play();
    }
    escenario.nivel4();
    personaje.draw();
    personaje.mover();
    personaje.llovido();
    boss.display();
    boss.mapeoVida();
    for (let i = 0; i < cantLluvia; i++) {
      lluvia[i].display();
      lluvia[i].llover();
    }
    boss.display2();
    for (let i = 0; i < cantPuntos; i++) {
      puntos[i].display();
    }
    //Cursor
    fill(20);
    ellipse(mouseX + posx, mouseY, 5, 5);




  }
  pop()

  if(estado=="nivel1"){
        controles.display();
  }

  if (estado == "nivel1" || estado == "nivel2" || estado == "nivel3" || estado == "nivel4") {
    hud.display();
    hud.hudImagenes();
  }


  //menu perdiste
  if (estado == "perdiste") {
    image(perdiste, 0, 0);
    if (keyDown(' ')) {
      estado = "nivel1";
      hud.reset();
      personaje.reset();
      maquina.stop();
    }
  }

  if(estado=="final"){
    background(255);
    image(festejo,-250,0);
    hud.reset();
    personaje.reset();
    maquina.stop();

    escenario.creditos();
  }

}

function mousePressed() {
  for (let i = 0; i < cantPuntos; i++) {
    puntos[i].click();
  }
    boss.click();
}
