function piste1() {
  var ntexte1 =
    "L’enquête « Conditions de vie et Aspirations » du <span class='color--red'>CRÉDOC</span> montre que 91% des membres des réseaux sociaux de 12ans et + y comptent des amis de toujours et 90% des membres de leur <span class='color--red'>famille</span> proche. Toutefois, le réseau en ligne élargit aussi le cercle de contacts à des « liens faibles » : 66% y intègrent des personnes rencontrées <span class='color--red'>épisodiquement</span> et pas moins d’un tiers des membres de réseaux sociaux intègrent dans leur cercle de relations des personnes jamais rencontrées.";
  var ntexte2 =
    "Les plus <span class='color--red'>jeunes</span> incluent le plus facilement l’intégralité de leurs amis dans leur cercle de relations numériques. L’intégration de membres de la famille proche est peu dépendante de l’âge. S’agissant de la présence de personnes qui ont compté mais qu’on ne voit plus trop aujourd’hui, ce sont les 18-39 ans qui sont les plus enclins à les faire figurer dans leurs contacts (88-89%). Même chose s’agissant des personnes rencontrées de façon épisodique. En revanche, pour les inconnus, ce sont les <span class='color--red'>60-69</span> ans qui se montrent les plus ouverts : à 41%, ils choisissent d’en faire figurer au moins certains dans le cercle relationnel, ce que les <span class='color--red'>12-17</span> ans ne sont que 23% à faire.";
  var ntexte3 =
    "Tous les niveaux de <span class='color--red'>diplômes</span> intègrent dans des proportions similaires les amis ou les membres de la famille proche. Mais, <span class='color--red'>plus</span> on est diplômé et plus on se montre accueillant avec des personnes perdues de vue ou avec qui le contact est intermittent. En d’autres termes on fait vivre et on entretient un réseau pré-existant. Alors, que ce sont les <span class='color--red'>non diplômés</span> qui sont les plus ouverts à l’intégration dans leur cercle de relations de personnes jamais rencontrées (41%) et pour qui les réseaux sociaux en ligne permettent de nourrir une sociabilité un peu moins riche en moyenne par ailleurs.";
  var ntexte4 =
    "Les <span class='color--red'>bas revenus</span> et les membres de la classe <span class='color--red'>moyenne inférieure</span> se montrent les plus enclins à faire figurer dans leur cercle relationnel digital les personnes les plus éloignées a priori : celles qu’on n’a jamais rencontrées mais qui semblent intéressantes.";
  var correction =
    "Vous avez validé l'exercice. Il vous manquait certainement plus de la moitié des mots, mais ce n'est pas grave on est tous flemmards dans la vie. Vu que je suis gentil, j'ai affiché la correction à coté de chaque graphique. A présent, rendez-vous sur la page <a href=''> Carte mentale </a> pour la suite !";
  var cartementale = document.querySelector("section.carte--mentale");
  cartementale.classList.add("correction");
  document.getElementById("texteatrou-1").innerHTML = ntexte1;
  document.getElementById("texteatrou-2").innerHTML = ntexte2;
  document.getElementById("texteatrou-3").innerHTML = ntexte3;
  document.getElementById("texteatrou-4").innerHTML = ntexte4;
  document.getElementById("texte--correction").innerHTML = correction;
}
