// Magienne
// - nom, dureeDeVie,baguetteMagique
// + rencontrer()
import { Personnage } from "./personnage.js";

export class Magicien extends Personnage {
  #baguetteMagique;
  constructor(nom, dureeDeVie, baguetteMagique) {
    super(nom, dureeDeVie);
    this.#baguetteMagique = baguetteMagique;
  }

  getBaguetteMagique() {
    return this.#baguetteMagique;
  }

  setBaguetteMagique(baguetteMagique) {
    return this.#baguetteMagique;
  }

  rencontrer() {
    console.log("Je suis un magicien");
  }
}

const gandalf = new Magicien("Gandalf", 202, "Baguette Gandalf");

console.log(`Nom : ${gandalf.getNom()}
Durée de vie : ${gandalf.getDureeDeVie()}
Baguette : ${gandalf.getBaguetteMagique()}
`);

gandalf.rencontrer();
