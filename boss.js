class Boss {
  constructor() {
    this.ancho = 200;
    this.alto = 200;

    //Posicion del punto
    this.x = 2550 - this.ancho;
    this.y = 90;
    //Si el punto se dibuja o no
    this.vivo = true;

    //Cantidad de clicks que necesita para que el punto desaparezca
    this.vida = 20;
    this.vidahud=20;

    //si se tinta o no
    this.tint = false;

    this.hudlimite = 0;
    this.hudancho = 200;
    this.hudx = width / 2;
    this.hudy = 100;

    this.play=false;
  }

  display() {
    //Calculo distancia entre personaje y punto
    this.distancia = dist(this.x, this.y+chimenea.height/2, personaje.x, personaje.y);

    if (this.vivo == true) {
      push();
      if (mouseIsPressed && this.distancia < 230) {
        tint(255, 0, 0);
      } else {
        tint(255, 255, 255);
      }
      image(chimenea, this.x, this.y);
      pop();
    }
    //Debug
    //line(this.x+obstimg.width/2,this.y+obstimg.height/2,personaje.x,personaje.y);
  }

  display2() {
    if (this.vivo == true) {
      push();
      if (mouseIsPressed && this.distancia < 230) {
        tint(255, 0, 0);
      } else {
        tint(255, 255, 255);
      }

      image(chimenea2, this.x, this.y);
      pop();
    }

    if(this.play==true){
      animacionFinal.display();
    }
  }

  mapeoVida() {
    this.mapeo = map(this.vida, this.vidahud, 0, 0, this.hudancho);

    fill(255,20,20);
    noStroke();
    rect(2600-210,70,this.hudancho-this.mapeo,20,30);

    fill(255,50);
    stroke(0);
    strokeWeight(4);
    rect(2600-210,70,this.hudancho,20,30);

    fill(0);
    ellipse(2600-210+this.hudancho/2,80,4,4);
}

  reset() {
    this.play = false;
    this.vivo = true;
    this.vida = 20;
    this.vidahud = 20;
    this.x = 2550 - this.ancho;
    this.y = 90;
  }

  click() {

    if (this.distancia < 250 && this.vivo == true) {
      if (mouseX + posx > this.x && mouseX + posx < this.x + chimenea.width && mouseY > this.y && mouseY < this.y + chimenea.height) {
        this.vida--;
        //Reproduzco sonido
        //ruido.play();
        picar.play();
        if (this.vida == 0) {
          this.vivo = false;
          this.play=true;
        }
      }
    }
  }
}
