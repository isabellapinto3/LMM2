class Lluvia {
  constructor() {
    //Posicion de la lluvia
    this.x = random(width * 3, width * 7);
    this.y = random(40, height - 40);
    //Velocidad
    this.speed = random(8, 10);
    //Tamaño
    this.tam = random(8, 15);
    //Variable boolean para dibujar o no a la lluvia
    this.hide = false;
    this.show=false;
  }

  display() {
    if (this.hide == false) {
      noStroke();
      fill(50, 200);
      ellipse(this.x, this.y, this.tam);
    }
  }

  llover() {
    if (this.x > 0) {
      //Si el personaje pasa este limite (width*1,5) sale una ráfaga de lluvia
      if(personaje.x>width*1.5){
        this.show=true;
      }

      if (this.show==true) {
        if (this.hide == false) {
          this.x = this.x - this.speed;
        }
      }
    } else {
      //La lluvia vuelve a su lugar original y se oculta cuando llega al final del nivel (width=0).
      this.x = random(width * 3, width * 3.6);
      this.hide = false;
    }
  }


}
