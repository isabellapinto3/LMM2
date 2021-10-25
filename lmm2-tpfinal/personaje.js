class Personaje {


  constructor() {

    this.x = 100;
    this.y = height / 2;
    this.speed = 5;

    //Ancho del Personaje
    this.w=25;
    //Alto del Personaje
    this.h=40;
  }

  draw() {
    fill(0,255,0);
    rect(this.x+100, this.y, this.w, this.h);
  }

  mover() {
    posx = this.x;
    //console.log(posx);

    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;      
    }
    if (keyIsDown(RIGHT_ARROW)) {      
      this.x += this.speed;      
    }
  }
}
