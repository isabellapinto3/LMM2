class Obstaculos {
  constructor() {
    //Posicion del moco
    this.x = random(200, width*3-800);
    this.y = random(280, height);
    this.adentro = false;
  }

  display() {
    //rect(this.x, this.y, moco.width, moco.height);
    image(moco, this.x, this.y)
  }
  reset(){
    obstaculos = [];
  }
}
