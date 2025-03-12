// Exercice 1 : Création et manipulation d'objets
const film = {
    titre: "Redemption",
    realisateur: "Steven Knight",
    anneeDeSortie: 2013,
    acteurs: ["Jason Statham", "Agata Buzek", "Vicky McClure"]
};
console.log(film);
console.log("Premier acteur :", film.acteurs[0]);

// Exercice 2 : Parcourir un objet
const ordinateur = {
    marque: "Dell",
    modele: "XPS 15",
    processeur: "Intel i7",
    ram: "32GB",
    stockage: "512GB SSD"
};
for (let key in ordinateur) {
    console.log(key, ":", ordinateur[key]);
}

// Exercice 3 : Manipulation de tableaux d'objets
const Students = [
    { nom: "Alice", age: 20, moyenne: 16 },
    { nom: "Bob", age: 22, moyenne: 14 },
    { nom: "Charlie", age: 21, moyenne: 17 },
    { nom: "David", age: 23, moyenne: 12 },
    { nom: "Eve", age: 20, moyenne: 18 }
];
console.log("Étudiants avec une moyenne supérieure à 15 sont :", Students.filter(e => e.moyenne > 15));

// Exercice 4 : Recherche dans un tableau d'objets
const voitures = [
    { marque: "Toyota", modele: "Corolla", annee: 2018 },
    { marque: "Honda", modele: "Civic", annee: 2012 },
    { marque: "Ford", modele: "Focus", annee: 2020 }
];
console.log("Les voitures fabriquées après 2015 :", voitures.filter(v => v.annee > 2015));

// Exercice 5 : Transformation de données
const produits = [
    { nom: "Ordinateur", prix: 1200 },
    { nom: "Smartphone", prix: 800 },
    { nom: "Tablette", prix: 500 }
];
console.log(produits.map(p => p.nom));

// Exercice 6 : Regroupement de données
const employes = [
    { nom: "Alice", poste: "Développeur", salaire: 3000 },
    { nom: "Bob", poste: "Designer", salaire: 2800 },
    { nom: "Charlie", poste: "Développeur", salaire: 3200 },
    { nom: "David", poste: "Designer", salaire: 2900 }
];
const salairesParPoste = employes.reduce((acc, emp) => {
    acc[emp.poste] = (acc[emp.poste] || 0) + emp.salaire;
    return acc;
}, {});
console.log("Salaires totaux par poste :", salairesParPoste);

// Exercice 7 : Tri de données
const livres = [
    { titre: "Anglais", auteur: "Dorothy", nombreDePages: 200 },
    { titre: "Histoire", auteur: "HATOU DJOMAHA", nombreDePages: 150 },
    { titre: "Math", auteur: "Pokam", nombreDePages: 300 }
];
livres.sort((a, b) => a.nombreDePages - b.nombreDePages);
console.log("Livres triés par nombre de pages :", livres);

// Exercice 8 : Réduction de données
const commandes = [
    { id: 1, montant: 5000 },
    { id: 2, montant: 7500 },
    { id: 3, montant: 10000 }
];
const montantTotal = commandes.reduce((total, cmd) => total + cmd.montant, 0);
console.log("Montant total des commandes :", montantTotal);
