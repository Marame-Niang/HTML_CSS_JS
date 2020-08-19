

window.onload = function(){
	var liste = document.getElementById("Liste");
   liste.style.display="none";

   var frais = document.getElementById("Frais");
   frais.style.display="none";
   
   var liste2 = document.getElementById("Liste2");
	liste2.style.display="none";

	var physique = document.getElementById("Physique");
	physique.style.display="none";

	var morale = document.getElementById("Morale");
	morale.style.display="none";

}

function affiche_liste(){
	var frais = document.getElementById("Frais");
   frais.style.display="none";

	var liste = document.getElementById("Liste");
   liste.style.display="block";
   
   var liste2 = document.getElementById("Liste2");
	liste2.style.display="block";
}

function cache_liste(){
	var frais = document.getElementById("Frais");
   frais.style.display="block";

	var liste = document.getElementById("Liste");
   liste.style.display="none";
   
   var liste2 = document.getElementById("Liste2");
	liste2.style.display="none";
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

function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}

function verif(e,elmt) {
        var key=e.keyCode||e.charCode;
        if (key==16) return;
        if ((key < 48)||(key > 59)||(!e.shiftKey))
            elmt.value=elmt.value.slice(0,-1);
    }

function verifSolde(champ)
{
	var solde = parseInt(champ.value);
   if(isNaN(solde) || champ.value.length < 4)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}



function verifRS(champ)
{
   var regex = /^[a-zA-Z0-9._-]\s[a-z0-9._-]$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifAdresse(champ)
{
   var regex = /^[a-zA-Z0-9._-]\s[a-z0-9._-]$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifNom(champ)
{
   var regex = /^[a-zA-Z0-9._-]\s[a-z0-9._-]$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifNIN(champ)
{
	var salaire = parseInt(champ.value);
   if(isNaN(salaire) || champ.value.length < 13 || champ.value.length > 13)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifPrenom(champ)
{
   var regex = /^[a-zA-Z0-9._-]\s[a-z0-9._-]$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifTel(champ)
{
   var telephone = parseInt(champ.value);
   if(isNaN(telephone) || champ.value.length < 9 || champ.value.length > 9)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifSalaire(champ)
{
	var salaire = parseInt(champ.value);
   if(isNaN(salaire) || champ.value.length < 4)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifForm(f)
{
	var soldeOk = verifSolde(f.solde);
   var RSOk = verifRS(f.raison_sociale);
   var AdresseOk = verifAdresse(f.adresse);
   var NomOk = verifNom(f.nom);
   var NINOk = verifNIN(f.cin);
   var PrenomOk = verifPrenom(f.prenom);
   var TelOk = verifTel(f.telephone);
   var salaireOk = verifSalaire(f.salaire);
   
   if(soldeOk && RSOk && AdresseOk && Nomok && NINOk && PrenomOk && TelOk && salaireOk){
      return true;
   }
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}



