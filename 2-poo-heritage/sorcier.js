// Sorcier
// - nom, dureeDeVie,baguetteMagique, batonMagique
// + rencontrer()
class Sorcier {
  constructor(nom, dureeDeVie, baguetteMagique, batonMagique) {
    this.nom = nom;
    this.dureeDeVie = dureeDeVie;
    this.baguetteMagique = baguetteMagique;
    this.batonMagique = batonMagique;
  }

  rencontrer() {
    console.log("Je suis un grand sorcier");
  }
}
