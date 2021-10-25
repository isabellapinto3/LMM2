class Escenario {
  constructor() {}
  draw() {
    noStroke();
    //Piso 1
    fill(255,70,40);
    rect(0, 0, width, height / 3);

    //Piso 2
    fill(230,80,20);
    rect(0, height / 3, width*3, height / 3);

    //Piso 3
    fill(255, 0, 0);
    rect(0, height / 3 * 2, width, height / 3);
  }
}
