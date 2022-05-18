function fin() {
  var correction =
    "Vous avez validé l'exercice de synthèse. Appellez un référant de l'exposé (sans bleuger, crier ou péstiférer dans la classe sous peine de chassé dans la joue) afin de faire valider votre magnifique travail.";
  var cartementale = document.querySelector("section.carte--mentale");
  cartementale.classList.add("correction");
  document.getElementById("texte--correction").innerHTML = correction;
}
