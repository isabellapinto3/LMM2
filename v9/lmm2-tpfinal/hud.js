class Hud {
  constructor() {
    this.tiempo = 0;
    this.limite = 5000;
    this.ancho = 400;
    this.x = width / 2 - this.ancho / 2;
    this.y = 50;
  }

  display() {
    this.tiempo++;
    this.mapeo = map(this.tiempo, 0, this.limite, 0, this.ancho);


    fill(0);
    stroke(0);
    rect(this.x, this.y, this.ancho, 10, 20);



    fill(255, 150);
    rect(this.x, this.y, this.ancho - this.mapeo, 10, 20);

    if(this.tiempo==this.limite){
      estado="perdiste";
    }

  }

  reset(){
    this.tiempo = 0;
    this.limite = 100;
  }


}
