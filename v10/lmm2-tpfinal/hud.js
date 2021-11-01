class Hud {
  constructor() {
    this.tiempo = 0;
    this.limite = 5000;
    this.ancho = 350;
    this.x = width / 2 - this.ancho / 2;
    this.y = 50;
    this.contador = 0;
  }

  display() {
    this.tiempo++;
    this.mapeo = map(this.tiempo, 0, this.limite, 0, this.ancho); 

    fill(255, 150);    
    rect(this.x+80, this.y, this.ancho - this.mapeo, 33, 10);

    fill(0);
    stroke(0);
    image(hudBarra, this.x+80, this.y-18)
    //image(hudcara[0],100,100);
    //rect(this.x, this.y, this.ancho, 10, 20);

    if(this.tiempo==this.limite){
      estado="perdiste";
    }

  }

  hudImagenes(){

    if(this.tiempo < 1000){
      console.log('0');    
      image(hudcara[0],this.x,this.y-18);
    }
    if(this.tiempo > 1000 && this.tiempo < 2000){
      console.log('1');    
      image(hudcara[1],this.x,this.y-18);
    }
    if(this.tiempo > 2000 && this.tiempo < 3000){
      console.log('2');    
      image(hudcara[2],this.x,this.y-18);
    }
    if(this.tiempo > 3000 && this.tiempo < 4000){
      console.log('3');    
      image(hudcara[3],this.x,this.y-18);
    }
    if(this.tiempo > 4000 && this.tiempo < 4500){
      console.log('4');    
      image(hudcara[4],this.x,this.y-18);
    }
    if(this.tiempo > 4500 && this.tiempo < 5000){
      console.log('5');    
      image(hudcara[5],this.x,this.y-18);
    }
    
  }

  reset(){
    this.tiempo = 0;
    this.limite = 5000;
  }


}
