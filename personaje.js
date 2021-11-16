class Personaje {
  constructor() {
    //Posicion personaje
    this.x = 100;
    this.y = height / 2;

    //Velocidad personaje
    this.speed = 10;

    //Ancho del Personaje
    this.w = 27;
    //Alto del Personaje
    this.h = 39;

  }

  draw() {

  }

  pegado() {
    this.speed = 20;
    for (let i = 0; i < cantObstaculos; i++) {
      if (this.x > obstaculos[i].x && this.x < obstaculos[i].x + moco.width && this.y + this.h / 2 > obstaculos[i].y && this.y + this.h / 2 < obstaculos[i].y + moco.height) {
        this.speed = 1;
      }
    }
  }

  llovido() {

    for (let i = 0; i < cantLluvia; i++) {
      if (this.x > lluvia[i].x && this.x < lluvia[i].x + moco.width && this.y + this.h / 2 > lluvia[i].y && this.y + this.h / 2 < lluvia[i].y + moco.height) {
        hud.tiempo += 20;
        if (!tos.isPlaying()) {
          tos.play();
        }

      }
    }
  }

  mover() {
    posx = this.x - 200;

    //console.log(posx);

    //MOVER PARA COSTADOS

    if (keyDown('a')) {
      if (estado != "nivel4") {
        if (this.x > 25) {
          this.x -= this.speed;
        }
      }
      if (estado == "nivel4") {
        if (this.x > 20) {
          this.x -= this.speed;
        }
      }


      //Dibuja sprite para la izquierda
      walkLeft.draw(this.x, this.y);
    } else if (keyDown('d')) {
      if (estado != "nivel4") {
        if (this.x < width * 3 - this.w) {
          this.x += this.speed;
        }
      }
      if (estado == "nivel4") {
        if (this.y < height / 2 + 150) {
          if (this.x < width * 2 - 200 - this.w) {
            this.x += this.speed;
          }
        } else {
          if (this.x < width * 2 - this.w) {
            this.x += this.speed;
          }
        }
      }

      //Dibuja sprite para la derecha
      walkRight.draw(this.x, this.y);
    } else if (mouseIsPressed) {
      picaranimacion.draw(this.x, this.y);
    } else {
      //Dibuja sprite parado (lo hice como animación por si después pinta agregarle alguna animación al estado quieto)
      standing.draw(this.x, this.y);

    }

    //MOVER ARRIBA Y ABAJO
    if (keyDown('w')) {
      if (estado != "nivel4") {
        if (this.y >= 260) { //limite superior
          this.y -= this.speed;
        }
      }
      if(estado=="nivel4"){
        if(this.x<width*2-200-this.w){
          this.y -= this.speed;
        }else{
          if(this.y < height/2){
          this.y -= this.speed;
          }
      }
      }
    }
    if (keyDown('s')) {
      if (this.y < height - this.h) { //limite inferior
        this.y += this.speed;
      }
    }

  }

  limitesChimenea() {

  }


  reset() {
    this.x = 200;
    this.y = height / 2 + 100;
  }

}
