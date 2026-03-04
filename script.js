let panier = JSON.parse(localStorage.getItem("panier")) || [];

// Mise à jour compteur
function updateCompteur() {
    let compteur = document.getElementById("compteur");
    if (compteur) {
        compteur.innerText = panier.length;
    }
}

// Ajouter produit test
function ajouterAuPanierTest() {
    panier.push({ nom: "Produit Test", prix: 10 });
    localStorage.setItem("panier", JSON.stringify(panier));
    updateCompteur();
    alert("Produit ajouté !");
}

// Afficher panier
function afficherPanier() {
    let liste = document.getElementById("listePanier");
    let totalElement = document.getElementById("total");
    let total = 0;

    liste.innerHTML = "";

    panier.forEach(item => {
        liste.innerHTML += `<p>${item.nom} - ${item.prix}€</p>`;
        total += item.prix;
    });

    totalElement.innerText = "Total : " + total + "€";
}

// Vider panier
function viderPanier() {
    localStorage.removeItem("panier");
    panier = [];
    afficherPanier();
}

// Charger compteur au démarrage
updateCompteur();
