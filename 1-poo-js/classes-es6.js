class Article {
  constructor(id, designation, description, prixHT) {
    this.id = id;
    this.designation = designation;
    this.description = description;
    this.prixHT = prixHT;
  }

  calculPrixTTC() {
    return this.prixHT * 1.2;
  }

  afficherArticle() {
    console.log(`Nom : ${this.designation}
    Description : ${this.description}
    ${this.prixHT} €
    `);
  }
}

const article = new Article(1, "PS 5", "Meilleur console", 400);

// Variables & Méthodes : camel case
// constantes : UPPERCASE + UNDERSCORE
// class : Pascal case

// const nomComplet="Christian Lisangola";
// function calculSurface(){

// }

// class UserInfo

// const PI=3.14;
// const AGE_DE_RETRAITE=70;
