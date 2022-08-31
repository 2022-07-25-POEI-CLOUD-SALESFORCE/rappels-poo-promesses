export class Personne {
  #nom;
  #prenom;
  #niveauEtude;
  #option; //Instance de la classe Option

  constructor(nom, prenom, niveauEtudes, option) {
    this.#nom = nom;
    this.#prenom = prenom;
    this.#niveauEtude = niveauEtudes;
    this.#option = option;
  }

  getNom() {
    return this.#nom;
  }

  setNom(nom) {
    this.#nom = nom;
  }

  getPrenom() {
    return this.#prenom;
  }

  setPrenom(prenom) {
    this.#prenom = prenom;
  }

  getNiveauEtudes() {
    return this.#niveauEtude;
  }

  getOption() {
    return this.#option;
  }

  setOption(option) {
    this.#option = option;
  }
}
