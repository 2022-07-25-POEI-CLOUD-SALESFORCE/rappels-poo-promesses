// Sorcier
// - nom, dureeDeVie,baguetteMagique, batonMagique

import { Magicien } from "./magicien.js";

// + rencontrer()
class Sorcier extends Magicien {
  #batonMagique;
  constructor(nom, dureeDeVie, baguetteMagique, batonMagique) {
    super(nom, dureeDeVie, baguetteMagique);
    this.#batonMagique = batonMagique;
  }

  getBatonMagique() {
    return this.#batonMagique;
  }

  setBatonMagique(batonMagique) {
    this.#batonMagique = batonMagique;
  }
}

const saruman = new Sorcier(
  "Saruman",
  600,
  "Baguette Saruman",
  "Baton Mystique"
);

console.log(`Nom : ${saruman.getNom()}
Durée de vie : ${saruman.getDureeDeVie()}
Baguette : ${saruman.getBaguetteMagique()}
Baton : ${saruman.getBatonMagique()}
`);

saruman.rencontrer();
