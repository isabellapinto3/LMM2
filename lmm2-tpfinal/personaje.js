class Personaje {
  constructor() {
    this.x = 50;
    this.y = height / 2;
    this.speed = 5;

    //Ancho del Personaje
    this.w=25;
    //Alto del Personaje
    this.h=40;
  }

  draw() {
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
  }
}
