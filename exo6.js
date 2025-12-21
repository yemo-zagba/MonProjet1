let totalHT = 0;
let prixProduit = -1;  // Pour entrer dans la boucle
let quantite = 0;

while (prixProduit !== 0) {
    prixProduit = parseFloat(prompt("Entrez le prix du produit (0 pour arrêter) :"));
    if (prixProduit !== 0) {
        quantite = parseInt(prompt("Entrez la quantité :"));
        totalHT += prixProduit * quantite;
    }
}

// Appliquer la remise en fonction du montant total HT
let remise = 0;
if (totalHT > 250000) {
    remise = 0.25;
} else if (totalHT > 150000) {
    remise = 0.20;
} else if (totalHT > 80000) {
    remise = 0.15;
} else if (totalHT > 40000) {
    remise = 0.10;
} else if (totalHT > 10000) {
    remise = 0.05;
}

let totalAvecRemise = totalHT * (1 - remise);

// Calcul du montant TTC
let totalTTC = totalAvecRemise;
if (totalHT < 10000) {
    totalTTC += totalTTC * 0.19;  // Ajout de la taxe de 19%
}

console.log("Total HT: " + totalHT + " FCFA");
console.log("Total TTC après remise et taxe: " + totalTTC + " FCFA");
