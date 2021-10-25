class Personaje {
  constructor() {
    this.x = 50;
    this.y = height / 2;
    this.speed = 10;
  }

  draw() {
    fill(255);
    rect(this.x, this.y, 50, 80);
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
