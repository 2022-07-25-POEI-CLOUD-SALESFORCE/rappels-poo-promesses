export class Option {
  #nom;
  #duree;
  #cours;

  constructor(nom, duree) {
    this.#nom = nom;
    this.#duree = duree;
    this.#cours = [];
  }

  //   Ici cours est une instance de la classe cours
  ajouterCours(cours) {
    this.#cours.push(cours);
  }

  ajouterPlusieursCours(...cours) {
    for (let c of cours) {
      this.ajouterCours(c);
    }
  }

  getNom() {
    return this.#nom;
  }

  setNom(nom) {
    this.#nom = nom;
  }

  getDuree() {
    return this.#duree;
  }

  setDuree(duree) {
    this.#duree = duree;
  }

  afficherCours() {
    this.#cours.forEach(function (cours) {
      console.log(cours);
    });
  }
}
