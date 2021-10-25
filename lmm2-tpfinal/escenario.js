class Escenario {
  constructor() {}
  draw() {
    //Piso 1
    fill(0, 0, 255);
    rect(0, 0, width, height / 3);

    //Piso 2
    fill(0, 255, 0);
    rect(0, height / 3, width, height / 3);

    //Piso 3
    fill(255, 0, 0);
    rect(0, height / 3 * 2, width, height / 3);
  }
}
