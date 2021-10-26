class Personaje {
  constructor() {
    //Posicion personaje
    this.x = 100;
    this.y = height / 2;

    //Velocidad personaje
    this.speed = 7;

    //Contador para imagenes del personaje
    this.contador = 0;

    //Ancho del Personaje
    this.w = 27;
    //Alto del Personaje
    this.h = 39;

  }

  draw() {}

  mover() {
    posx = this.x - 200;
    //console.log(posx);

    //MOVER PARA COSTADOS
    if (keyDown('a')) {
      if (this.x > 0) {
        this.x -= this.speed;
      }

      //Dibuja sprite para la izquierda
      walkLeft.draw(this.x, this.y);
    } else if (keyDown('d')) {
      if (this.x < width * 3 - this.w) {
        this.x += this.speed;
      }
      //Dibuja sprite para la derecha
      walkRight.draw(this.x, this.y);
    } else {
      //Dibuja sprite parado (lo hice como animación por si después pinta agregarle alguna animación al estado quieto)
      standing.draw(this.x, this.y);
    }

    //MOVER ARRIBA Y ABAJO
    if (keyDown('w')) {
      if (this.y >= 100) { //limite superior
        this.y -= this.speed;
      }
    }
    if (keyDown('s')) {
      if (this.y < height - this.h - 50) { //limite inferior
        this.y += this.speed;
      }
    }

  }
}
