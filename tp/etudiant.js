import { Personne } from "./personne";

export class Etudiant extends Personne {
  constructor(nom, prenom, niveauEtudes, option) {
    super(nom, prenom, niveauEtudes, option);
  }
}
