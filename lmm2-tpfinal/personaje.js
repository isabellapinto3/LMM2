class Personaje {
  constructor() {
    this.x = 100;
    this.y = height / 2;
    this.speed = 7;
    this.contador = 0;

    //Ancho del Personaje
    this.w = 27;
    //Alto del Personaje
    this.h = 39;
  }

  draw() {
    image(astroimg[this.contador], this.x, this.y);
  }

  mover() {
    posx = this.x - 200;
    //console.log(posx);

    //MOVER PARA COSTADOS
    if (keyIsDown(LEFT_ARROW)) {
      if (this.x > 0) {
        this.x -= this.speed;
      }
      this.contador = 2;
    } else if (keyIsDown(RIGHT_ARROW)) {
      if (this.x < width * 3-this.w) {
        this.x += this.speed;
      }

      this.contador = 1;
    } else {
      this.contador = 0;
    }

    //MOVER ARRIBA Y ABAJO
    if(keyIsDown(UP_ARROW)){
      if (this.y >= 0) {
      this.y -= this.speed;
      }
    }
    if(keyIsDown(DOWN_ARROW)){
      if (this.y < height-this.h) {
      this.y += this.speed;
    }
    }

  }
}
