function Article(id, designation, description, prixHT) {
  // {}
  this.id = id;
  this.designation = designation;
  this.description = description;
  this.prixHT = prixHT;
}

const article = new Article(1, "PS 5", "Meilleur console", 400);
const article2 = article; //article et article2 pointent vers le même objet en mémoire

// const article = new Article(1, "PS 5", "Meilleur console", 400);
// const article2 = new Article(2, "Xbox one", "Produit de Microsoft", 320);
