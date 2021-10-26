class Obstaculos {
  constructor() {
    this.x = random(200, width * 3);
    this.y = random(80, height - 100);
    this.vivo = true;
    this.vida = 3;
  }

  display() {
    this.distancia = dist(this.x, this.y, personaje.x, personaje.y);

    if (this.vivo == true) {
      image(obstimg, this.x, this.y);
    }

    //Debug
    //line(this.x+obstimg.width/2,this.y+obstimg.height/2,personaje.x,personaje.y);
  }

  click() {
    if (this.distancia < 50 && this.vivo == true) {
      if (mouseX + posx > this.x && mouseX + posx < this.x + obstimg.width && mouseY > this.y && mouseY < this.y + obstimg.height) {
        this.vida--;
        ruido.play();
        picar.play();
        if (this.vida == 0) {
          this.vivo = false;
        }
      }
    }
  }
}
