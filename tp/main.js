import { Cours } from "./cours.js";
import { Etudiant } from "./etudiant.js";
import { Formateur } from "./formateur.js";
import { Option } from "./option.js";

const react = new Cours("React.js", 30);
const node = new Cours("Node.js & Express", 40);
const javaPoo = new Cours("Fondamentaux POO avec JAVA");
const htmlEtCss = new Cours("HTML 5 & CSS 3", 10);
const sass = new Cours("Sass", 5);
const postreSQL = new Cours("PostreSQL", 20);

const frontEnd = new Option("Parcours Frontend", 4);
frontEnd.ajouterCours(react);
frontEnd.ajouterCours(htmlEtCss);
frontEnd.ajouterCours(sass);
console.log("Liste des cours frontend : ");
frontEnd.afficherCours();

const backend = new Option("Parcours Backend", 5);
backend.ajouterCours(node);
backend.ajouterCours(javaPoo);
backend.ajouterCours(htmlEtCss);
backend.ajouterCours(postreSQL);
console.log("Liste des cours backend : ");
backend.afficherCours();

const fullStack = new Option("Parcours fullstack", 10);
fullStack.ajouterPlusieursCours(
  htmlEtCss,
  sass,
  react,
  javaPoo,
  postreSQL,
  node
);
console.log("Liste des cours fulltack : ");
backend.afficherCours();

const etudiant1 = new Etudiant("Benzema", "Karim", "Bac + 5", frontEnd);
console.log("Etudiant 1 : ", etudiant1);
const etudiant2 = new Etudiant("Vasquez", "Lucas", "Bac + 3", fullStack);
console.log("Etudiant 2 : ", etudiant2);

const formateur = new Formateur(
  "Lisangola",
  "Christian",
  "Bac + 5",
  fullStack,
  7
);

console.log("formateur : ", formateur);
