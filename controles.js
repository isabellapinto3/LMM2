class Controles{

    constructor() {
      this.x=-50;
      this.y=100;
      this.speedx=4;
      this.speedy=2;

      this.tiempo = 0;
      this.x2=10;
      this.vel = 1;

      this.x3 =10;
      this.vel2 = 1;
    }

    display(){
      this.x+=this.speedx;

      
      image(tutorial,this.x,this.y);

      if(this.x>width/3){
        this.y-=this.speedy;
      }

    }


    display2(){
      this.x2 = this.x2+this.vel
      this.x3 = this.x3+this.vel2

      
      this.tiempo++;
      
      if(this.x2 > 200 && this.tiempo <200){
        this.vel = 0;        
      }

      if(this.tiempo >300){
        this.vel = -1;
      }

      
      if(this.x3 > 650 && this.tiempo <700){
        this.vel2 = 0;        
      }

      if(this.tiempo >800){
        this.vel2 = -1;
      }
      
      
      image(tutorial,this.x3-500,60)
      navePicar.draw(this.x2,100)
      //image(tutorialClick,this.x2,70)
      push()
      fill(0)
      rect(0, 0, 100, 600);
      pop()

    }

    reset(){
      this.tiempo = 0;
      this.x2=10;
      this.vel = 1;
      this.x3=10;
      this.vel2 = 1;
    }
}
