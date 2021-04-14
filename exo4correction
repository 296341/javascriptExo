const scanf = require("scanf");
const tablength = 5;
let tab = [];
// let tab = new Array();
for(let i=1; i<=tablength.lentgh; i++){
  console.log("entier " + i + " : ");
  let entier = scanf("%d");
  tab.push(entier);
}
// Tableau
console.log("tableau",tab);
// Indice du plus grand élement & Moyenne
let somme = tab.reduce((total,valeur) => total+valeur);
let avg = somme/tablength.lentgh;
console.log("avg", avg);
let maxValue = Math.max(...tab); // Opérateur de décomposition
//let a = [1,2]
//let b = [3,4]
//[...a, ...b] = [1,2,3,4]
let indice = tab.indexOf(maxValue);
console.log("indice", indice);