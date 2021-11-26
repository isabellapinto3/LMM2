class Lluvia {
  constructor() {
    //Posicion de la lluvia
    this.x = random(width * 3, width * 9);
    this.y = random(45, height - 45);
    //Velocidad
    this.speed = random(6, 8);
    //Tamaño
    this.tam = random(8, 15);
    //Variable boolean para dibujar o no a la lluvia
    this.hide = false;
    this.show=false;
    this.selector=int(random(0,3));
  }

  display() {
    if (this.hide == false) {
      image(nubes[this.selector],this.x,this.y);
    }
  }



  llover() {
    if (this.x > 0) {
      //Si el personaje pasa este limite (width*1,5) sale una ráfaga de lluvia
      if(personaje.x>width/4){
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

  reset(){
    this.x = random(width, width * 2);
    this.y=random(height/2-50,height/2+20);
    this.speed = random(6, 8);
    this.tam = random(8, 15);
    this.selector = int(random(0,3));
  }

  reset1(){
    this.x = random(width, width * 4);
    this.y=random(45, height - 45);
    this.speed = random(6, 8);
    this.tam = random(8, 15);
    this.selector = int(random(0,3));
  }

  reset2(){
    //Posicion de la lluvia
    this.x = random(width * 3, width * 7);
    this.y = random(45, height - 45);
    //Velocidad
    this.speed = random(6, 8);
    //Tamaño
    this.tam = random(8, 15);
    this.selector=int(random(0,3));
  }

}
