
// Gestion de la fermeture de la page web(confirmation avant de quiter )
window.addEventListener("beforeunload", function (e) {
    var message = "On est bien ici !";
    e.returnValue = message; // Provoque une demande de confirmation (standard)
    return message; // Provoque une demande de confirmation (certains navigateurs)
});

function rechecherEleve(){
	var nom= prompt(" Veuillez entrez le nom de votre enfant :");
	
	console.log(nom+ " élève assidu. Tle A2, le calcul des moyennes est en cours. Merci !");
	
	document.getElementById("two").textContent= nom+ " est un(e) élève assidu(e).Tle A2, calcul des moyennes est en cours. Merci !";
	document.getElementById('two').style.color="red";
	return nom+ " est un élève assidu. le calcul des moyennes est en cours.";
}

var bouton= document.getElementById("button");
button.addEventListener("click", rechecherEleve);
	
	