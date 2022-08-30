const article = {
  id: 1,
  designation: "Playstation 5",
  description: "Meilleure console de jeux",
  prixHT: 400,
  calculPrixTTC() {
    return this.prixHT * 1.2;
  },
  afficherArticle() {
    console.log(`Nom : ${this.designation}
Description : ${this.description}
${this.prixHT} €
`);
  },
};

// Mauvaise pratique à cause de la duplication
const article2 = {
  id: 2,
  designation: "Xbox Serie X",
  description: "Console de Microsofr",
  prixHT: 320,
  calculPrixTTC() {
    return this.prixHT * 1.2;
  },
  afficherArticle() {
    console.log(`Nom : ${this.designation}
Description : ${this.description}
${this.prixHT} €
`);
  },
};

// console.log(`Nom : ${article.designation}
// Description : ${article.description}
// ${article.prixHT} €
// `);

// console.log(
//   "Nom : " +
//     article.designation +
//     "\nDescription : " +
//     article.description +
//     "\n" +
//     article.prixHT +
//     "€"
// );

// console.log("Nom : " + article.designation);
// console.log("Description : " + article.description);
// console.log(article.prixHT + "€");
