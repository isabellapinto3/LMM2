import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;
import ddf.minim.signals.*;
import ddf.minim.spi.*;
import ddf.minim.ugens.*;

//Imagenes
PImage[] pulmon= new PImage[5];
PShape anatomy;

//Sonido
Minim minim;
AudioPlayer picar;

//Variables
int x;
int y;
int ancho = 700;
int alto = 800;
int opacidad = 0;
int i = 0;
boolean resize = false;
boolean click = false;
boolean zoomOut=false;


void setup() {
  size(600, 800);
  imageMode(CENTER); 
  shapeMode(CENTER);
  
  //Imagenes
  for (int i = 0; i < 5; i++) {
    pulmon [i] = loadImage ("pulmon"+i+".png");
  }
  anatomy = loadShape("anatomy.svg");
  x = width/2;
  y=height/2;  
  
  minim = new Minim(this);
  picar = minim.loadFile("picar.mp3", 2048);
  picar.setGain(80);
}


void draw() {  
  background(20);
  shape(anatomy, x, y, ancho, alto);
  
  pushStyle();
  tint(255, opacidad);
  image(pulmon[i], width/2, height/2);
  popStyle();

  if (mouseX>230 && mouseX<290 && mouseY >370 && mouseY < 430) {
    fill(255, 70);
    ellipseMode(CENTER);
    noStroke();
    ellipse(260, 400, 60, 60);
  }



  if (resize ==true) {
    ancho +=8;
    alto +=8;
    y-=1;
    println(ancho + "alto" + alto);
    if (ancho>=1700 && y<=height/2-50) {
      resize=false;
      click = true;
      opacidad = 255;
    }
  }

}

void mouseClicked() {
  if (mouseX>230 && mouseX<290 && mouseY >370 && mouseY < 430) {
    resize = true;
  }
  if (click==true) {    
    if(i<4){
      i+=1;
    }else{
      zoomOut=true;
    }
    picar.play();
    picar.rewind();
  }
}
