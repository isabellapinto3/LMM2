class AnimacionFinal {
  constructor() {
    this.ancho=1300-300;
    this.alto=600-300;
    this.y=height/.9;
    this.velocidad=6;
    this.crecimientow=16;
    this.crecimientoh=16;
    this.agrandar=true;
  }

  display() {
    if(this.agrandar==true){
    push();
    imageMode(CENTER);
    image(bg,width/2,height/2);
    image(avionfrontal,width/2,this.y,this.ancho,this.alto);
    pop();

    this.y-=this.velocidad;
    this.ancho+=this.crecimientow;
    this.alto+=this.crecimientoh;
}
    if(this.ancho>2500){
      background(255);
      this.agrandar=false;
      image(festejo,-10,0);
    }
  }

}
