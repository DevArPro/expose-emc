function piste2() {
  var ndef1 =
    "<span class='color--red'>Un groupe d'entraide</span> est un groupe de personnes partageant les mêmes <span class='color--red'>expériences</span>, problèmes, handicaps et souffrances et qui essaient de les résoudre en s'aidant mutuellement.";
  var ndef2 =
    "<span class='color--red'>Une association</span> est un groupement de personnes <span class='color--red'>volontaires</span> réunies autour d'un projet commun ou partageant des activités, mais sans chercher à réaliser de <span class='color--red'>bénéfices</span>.";
  var ndef3 =
    "<span class='color--red'>Le bénévolat</span> : Situation d'une personne qui accomplit un travail <span class='color--red'>gratuitement</span>, sans y être <span class='color--red'>obligée</span>.";
  var texte1 =
    "Steven : « Le fait de rencontrer des personnes qui ont la même maladie que moi, qui ont connu des situations assez dramatiques alors que je croyais être le seul au monde à être malheureux, triste et seul » <span class='color--red'>Groupe d'entraide</span>";
  var texte2 =
    "Théo : « J’ai toujours aimé aider les personnes et me sentir utile » <span class='color--red'>Bénévolat</span>";
  var texte3 =
    "Clara : « Je me suis relevée et j’ai pu m’investir dans des activités. Il y a une bonne équipe ici, qui est très accueillante. C’est pour ça je me suis vite sentie à ma place ici, car j’aime bien aider les gens et je m’y suis retrouvée » <span class='color--red'>Association</span>";

  var correction =
    "Vous avez validé l'exercice. Il vous manquait certainement plus de la moitié des mots et des définitions, mais ce n'est pas grave on est tous flemmards dans la vie. Vu que je suis gentil, j'ai affiché la correction à la place de chaque trou dans les différents textes. A présent, rendez-vous sur la page <a href='../pages/p3.html'> Carte mentale </a> pour la suite !";
  var cartementale = document.querySelector("section.carte--mentale");
  cartementale.classList.add("correction");
  document.getElementById("definition--1").innerHTML = ndef1;
  document.getElementById("definition--2").innerHTML = ndef2;
  document.getElementById("definition--3").innerHTML = ndef3;
  document.getElementById("steven").innerHTML = texte1;
  document.getElementById("theo").innerHTML = texte2;
  document.getElementById("clara").innerHTML = texte3;
  document.getElementById("texte--correction").innerHTML = correction;
}
