export class Personnage {
  #nom;
  #dureeDeVie;
  constructor(nom, dureeDeVie) {
    this.#nom = nom;
    this.#dureeDeVie = dureeDeVie;
  }

  getNom() {
    return this.#nom;
  }

  getDureeDeVie() {
    return this.#dureeDeVie;
  }

  setNom(nom) {
    this.#nom = nom;
  }

  setDureeDeVie(dureeDeVie) {
    this.#dureeDeVie = dureeDeVie;
  }

  rencontrer() {
    console.log("Je suis un personnage");
  }
}
