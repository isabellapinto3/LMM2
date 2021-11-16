class Controles{

    constructor() {
      this.x=-50;
      this.y=100;
      this.speedx=4;
      this.speedy=2;
    }

    display(){
      this.x+=this.speedx;

      fill(255);
      rect(this.x,this.y,50,50);

      if(this.x>width/3){
        this.y-=this.speedy;
      }

    }
}
