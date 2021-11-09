class Animacion {
  constructor() {
    this.tiempo=0;
    this.x=0;
    this.y=-25;
    this.velocidad=6;
  }

  display() {

    this.tiempo+=0.05;
    image(comic,this.x,this.y);
    fill(0);
    text(this.tiempo,10,50);
    //FADE IN
    //fill(255,100);
    //rect(0,0,1300,600);

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
    }
  }

}
