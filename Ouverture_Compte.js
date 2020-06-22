

window.onload = function(){
	var liste1 = document.getElementById("Liste1");
	liste1.style.display="none";
	var liste2 = document.getElementById("Liste2");
	liste2.style.display="none";
	var liste3 = document.getElementById("Liste3");
	liste3.style.display="none";
	var physique = document.getElementById("Physique");
	physique.style.display="none";
	var morale = document.getElementById("Morale");
	morale.style.display="none";

}

function affiche_physique(){
	var physique = document.getElementById("Physique");
	physique.style.display="block";
	var morale = document.getElementById("Morale");
	morale.style.display="none";
}

function affiche_morale(){
	var morale = document.getElementById("Morale");
	morale.style.display="block";
	var physique = document.getElementById("Physique");
	physique.style.display="none";
	
}

function affiche_liste1(){
	var liste1 = document.getElementById("Liste1");
	liste1.style.display="block";

	var liste2 = document.getElementById("Liste2");
	liste2.style.display="none";

	var liste3 = document.getElementById("Liste3");
	liste3.style.display="none";
	
}

function affiche_liste2(){
	var liste2 = document.getElementById("Liste2");
	liste2.style.display="block";

	var liste1 = document.getElementById("Liste1");
	liste1.style.display="none";

	var liste3 = document.getElementById("Liste3");
	liste3.style.display="none";
	
}

function affiche_liste3(){
	var liste3 = document.getElementById("Liste3");
	liste3.style.display="block";

	var liste1 = document.getElementById("Liste1");
	liste1.style.display="none";

	var liste2 = document.getElementById("Liste2");
	liste2.style.display="none";
	
}