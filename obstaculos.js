class Obstaculos {
  constructor() {
    //Posicion del moco

      this.x = random(200, width * 3 - 800);
      this.y = random(280, height);
      this.adentro = false;



  }

  display() {
    if (estado == "nivel1") {
      image(moco, this.x, this.y);
    } else if (estado == "nivel2") {
      image(saliva, this.x, this.y);
    } else if (estado == "nivel3") {
      image(saliva, this.x, this.y);
    }

  }
  reset() {
    this.adentro=false;

          this.x = random(200, width * 3 - 800);
          this.y = random(280, height);
  }
}
