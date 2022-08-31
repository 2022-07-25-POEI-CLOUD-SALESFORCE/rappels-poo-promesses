import { Personne } from "./personne.js";

export class Formateur extends Personne {
  #anneesExperience;

  constructor(nom, prenom, niveauEtudes, option, anneesExperience) {
    super(nom, prenom, niveauEtudes, option);
    this.#anneesExperience = anneesExperience;
  }

  getAnneesExperience() {
    return this.#anneesExperience;
  }

  setAnneesExperience(anneesExperience) {
    this.#anneesExperience = anneesExperience;
  }
}
