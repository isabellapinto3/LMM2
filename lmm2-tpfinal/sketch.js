//variables globales
var posx;
let bg;
let walls;
let cantObstaculos;
let estado;

//Clases
let personaje;
let escenario;
let obstaculos = [];

//Animaciones
let standing;
let walkRight;
let walkLeft;

function preload() {
  //Cargo imagenes astronauta
  standing = loadAnimation('img/astro0.png');
  walkRight = loadAnimation("img/astro1.png", "img/astro2.png", "img/astro3.png");
  walkLeft = loadAnimation("img/astro4.png", "img/astro5.png", "img/astro6.png");
  bg = loadImage('img/background.png');
  walls = loadImage('img/walls.png');
  obstimg = loadImage('img/rock.png');
  picar = loadSound("sound/picar.mp3");
  ruido = loadSound("sound/ruido.mp3");
}

function setup() {
  noCursor();
  createCanvas(1300, 600);
  estado = "menu";
  cantObstaculos = 3;
  //Declaro clases
  personaje = new Personaje();
  escenario = new Escenario();

  for (let i = 0; i < cantObstaculos; i++) {
    obstaculos.push(new Obstaculos());
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
      if (mouseX > width / 2 - 40 && mouseX < width / 2 + 40 && mouseY > height / 2 - 25 && mouseY < height / 2 + 25) estado = "juego";
    }
  }

  if (estado == "juego") {
    translate(-posx, 0);
    background(255, 0, 0);

    escenario.draw();
    personaje.draw();
    personaje.mover();


    for (let i = 0; i < cantObstaculos; i++) {
      obstaculos[i].display();
    }
    fill(20);
    ellipse(mouseX + posx, mouseY, 5, 5);
  }
}

function mousePressed() {
  for (let i = 0; i < cantObstaculos; i++) {
    obstaculos[i].click();
  }
}
