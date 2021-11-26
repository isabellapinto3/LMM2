class Puntos {
  constructor() {
    //Posicion del punto
    this.x = random(200, width * 3 - 600);
    this.y = random(280, height);

    //Si el punto se dibuja o no
    this.vivo = true;

    //Cantidad de clicks que necesita para que el punto desaparezca


    this.vida = 3;



    this.contador = 0;
  }

  display() {
    //Calculo distancia entre personaje y punto

    this.distancia = dist(this.x, this.y, personaje.x, personaje.y);

    if (this.vivo == true) {
      image(rock[this.contador], this.x, this.y);
    }




    //Debug
    //line(this.x+obstimg.width/2,this.y+obstimg.height/2,personaje.x,personaje.y);
  }

  reset() {
    this.vivo = true;
    this.vida = 3;
    this.contador=0;
    this.x = random(200, width * 3 - 800);
    this.y = random(280, height);
  }

  click() {
    if (this.distancia < 50 && this.vivo == true) {
        this.vida--;
        this.contador++;
        hud.tiempo -= 150;

        //Reproduzco sonido
        ruido.play();
        picar.play();

        if (this.vida == 0) {
          this.vivo = false;
        }

    }
  }
}
