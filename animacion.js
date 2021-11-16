class Animacion {
  constructor() {
    this.tiempo=0;
    this.x=0;
    this.y=-25;
    this.velocidad=6;

    this.botonx=width-130;
    this.botony=height-20;

  }

  display() {
    if (!intro.isPlaying()) {
      intro.play();
    }

    this.tiempo+=0.05;
    image(comic,this.x,this.y);
    //FADE IN
    //fill(255,100);
    //rect(0,0,1300,600);
    fill(255,0,0);
    //rect(this.botonx,this.botony,50,20);

    this.colorhover=color(0,0,0);
    fill(this.colorhover);

    text("Saltear Animación", this.botonx, this.botony);
    ellipse(mouseX,mouseY,5,5);
    if(mouseIsPressed){
    if(mouseX>width-130 && mouseX<width && mouseY>height-30 && mouseY<height){
      this.colorhover=color(255,0,0);
      estado="nivel1"
              intro.stop();
    }}

    //LINEA SUPERIOR
    if(this.tiempo<8){
      this.x=0;
    }if(this.tiempo>8&&this.tiempo<19.5){
      this.x-=this.velocidad;
    }
    if(this.tiempo>27&&this.tiempo<27+11){
      this.x-=this.velocidad;
    }

    //LINEA INFERIOR
    if(this.tiempo>45 && this.tiempo<45+10){
      this.x+=this.velocidad+7.5;
      this.y-=this.velocidad-2.8;
    }
    if(this.tiempo>60 && this.tiempo<60+11.5){
      this.x-=this.velocidad;
    }
    if(this.tiempo>78 && this.tiempo<78+11.1){
      this.x-=this.velocidad;
    }
    if(this.tiempo>100){
      this.tiempo=100;
      estado = "nivel1";

        intro.stop();

    }
  }

}
