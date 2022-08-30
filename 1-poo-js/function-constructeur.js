function Article(id, designation, description, prixHT) {
  // {}
  this.id = id;
  this.designation = designation;
  this.description = description;
  this.prixHT = prixHT;

  //   Mauvaise pratique car  chaque va avoir une copie des 2 méthodes
  //   this.calculPrixTTC = function () {
  //     return this.prixHT * 1.2;
  //   };

  //   this.afficherArticle = function () {
  //     console.log(`Nom : ${this.designation}
  //   Description : ${this.description}
  //   ${this.prixHT} €
  //   `);
  //   };
}

Article.prototype.calculPrixTTC = function () {
  return this.prixHT * 1.2;
};

Article.prototype.afficherArticle = function () {
  console.log(`Nom : ${this.designation}
    Description : ${this.description}
    ${this.prixHT} €
    `);
};

// const article = Article(1, "PS 5", "Meilleur console", 400);Mauvaise pratique

const article = new Article(1, "PS 5", "Meilleur console", 400);
const article2 = article; //article et article2 pointent vers le même objet en mémoire

// const article = new Article(1, "PS 5", "Meilleur console", 400);
const article3 = new Article(2, "Xbox one", "Produit de Microsoft", 320);
