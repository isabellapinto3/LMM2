class Escenario {
  constructor() {
    this.hover = false;
    this.hover2=false;
  }

  menu() {
    image(menu, 0, 0);

    push();
    noFill();
    stroke(255);
    rectMode(CENTER);
    rect(225, height / 2 + 100, 150, 50, 10);

    fill(255);
    textAlign(CENTER, CENTER);
    textStyle(NORMAL);
    strokeWeight(0);
    textSize(16);
    text("CONTROLES", 225, height / 2 + 100);
    pop();
    if (this.hover == true) {
      fill(255);
      rectMode(CENTER);
      noStroke();
      rect(225, height / 2 + 100, 150, 50, 10);
      fill(0);
      textAlign(CENTER, CENTER);
      textStyle(NORMAL);
      textSize(16);
      text("CONTROLES", 225, height / 2 + 100);
    }


    push();
    noFill();
    stroke(255);
    rectMode(CENTER);
    rect(225, height / 2 + 170, 150, 50, 10);

    fill(255);
    textAlign(CENTER, CENTER);
    textStyle(NORMAL);
    strokeWeight(0);
    textSize(16);
    text("CRÉDITOS", 225, height / 2 + 170);
    pop();
    if (this.hover2 == true) {
      fill(255);
      rectMode(CENTER);
      noStroke();
      rect(225, height / 2 + 170, 150, 50, 10);
      fill(0);
      textAlign(CENTER, CENTER);
      textStyle(NORMAL);
      textSize(16);
      text("CRÉDITOS", 225, height / 2 + 170);
    }

    this.hover = false;
    this.hover2=false;
    if (mouseX > 255 - (150/2) && mouseX < 255 + (150/2) && mouseY > height / 2 + 100 - 50/2 && mouseY < height / 2 + 100 + 50/2) {
      this.hover = true;
      //estado="controles"
    }
    if (mouseX > 255 - (150/2) && mouseX < 255 + (150/2) && mouseY > height / 2 + 170 - 50/2 && mouseY < height / 2 + 170 + 50/2) {
      this.hover2 = true;
      //estado="creditos"
    }
    fill(255);
    ellipse(mouseX, mouseY, 5, 5);
  }

  nivel1() {
    image(bg, 0, 0);
    //image(bg, width, 0);
    //image(bg, width * 2, 0);
    //image(walls, 0, 0);
  }

  nivel2top(){
      image(bg2Top, 0, 0);
  }

  nivel2() {
    image(bg2, 0, 0);
  }
  nivel3() {
    image(bg3, 0, 0);
  }
  nivel4() {
    image(bg4, 0, 0);
  }

}
