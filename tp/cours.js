export class Cours {
  #nom;
  #nombreHeures;

  constructor(nom, nombreHeures) {
    this.#nom = nom;
    this.#nombreHeures = nombreHeures;
  }

  getNom() {
    return this.#nom;
  }

  setNom(nom) {
    this.#nom = nom;
  }

  getNombreHeures() {
    return this.#nombreHeures;
  }

  setNombreHeures(nombreHeures) {
    this.#nombreHeures = nombreHeures;
  }
}
