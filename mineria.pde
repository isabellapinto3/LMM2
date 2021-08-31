PImage fondo;
PShape anatomy;
PImage pulmon;

int ancho = 700;
int alto = 800;
int opacidad = 0;
boolean resize = false;


void setup() {
  fondo = loadImage("cuerpo.jpg");
  pulmon = loadImage("pulmon.jpg");
  size(600, 800);
  imageMode(CENTER); 
  anatomy = loadShape("anatomy.svg");
  
  shapeMode(CENTER);
}


void draw() {  
  background(0);
  //image(fondo, width/2, height/2);
  //fondo.resize(ancho,alto);
  shape(anatomy, width/2, height/2, ancho, alto);
  pushStyle();
  tint(255,opacidad);
image(pulmon,width/2,height/2);
  popStyle();
  //println("MouseX:" + mouseX + "Mouse Y: " + mouseY);
  if (mouseX>263 && mouseX<327 && mouseY >260 && mouseY < 330) {
    fill(255, 70);
    ellipseMode(CENTER);
    ellipse(295, 295, 70, 70);
  }



  if (resize ==true) {
    ancho +=8;
    alto +=8;
    println(ancho);
    if (ancho>=1700) {
      resize=false;
      opacidad = 255;
    }
  }
}

void mouseClicked() {
  if (mouseX>263 && mouseX<327 && mouseY >260 && mouseY < 330) {
    resize = true;
  }
}
