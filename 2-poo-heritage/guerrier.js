// Guerrier
// - nom, dureeDeVie,arme
// + rencontrer()

class Guerrier {
  constructor(nom, dureeDeVie, arme) {
    this.nom = nom;
    this.dureeDeVie = dureeDeVie;
    this.arme = arme;
  }
  rencontrer() {
    console.log("Je suis un guerrier");
  }
}
