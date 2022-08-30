import { Personnage } from "./personnage.js";

class Guerrier extends Personnage {
  #arme;
  constructor(nom, dureeDeVie, arme) {
    super(nom, dureeDeVie);
    this.#arme = arme;
  }

  getArme() {
    return this.#arme;
  }

  setArme(arme) {
    this.#arme = arme;
  }
}

const chris = new Guerrier("Christian Lisangola", 200, "M16 A4");

console.log(`Nom : ${chris.getNom()}
Durée de vie : ${chris.getDureeDeVie()}
Arme : ${chris.getArme()}
`);

chris.rencontrer();
