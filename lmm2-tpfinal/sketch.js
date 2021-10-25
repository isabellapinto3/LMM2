let piso;

//Clases
let personaje;
let escenario;

function setup() {
  createCanvas(1300, 600);

  //Declaro clases
  personaje = new Personaje();
  escenario = new Escenario();

  piso = 2;
}

function draw() {
  background(255);
  escenario.draw();

  if (piso == 1) {
    personaje.y = height / 2 + 250;
  } else if (piso == 2) {
    personaje.y = height / 2+50;
  } else {
    personaje.y = 150;
  }

  personaje.draw();
  personaje.mover();
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    if (piso != 3) {
      piso += 1;
    }
  }
  if (keyCode == DOWN_ARROW) {
    if (piso != 1) {
      piso -= 1;
    }
  }
}
