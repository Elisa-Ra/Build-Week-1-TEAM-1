const star = function(index) {
  const stelle = document.querySelectorAll(".stelline");

  // Reset di tutte le stelle
  stelle.forEach(stella => stella.classList.remove("attiva"));

  // Attiva quelle fino all'indice cliccato
  for (let i = 0; i < index; i++) {
    stelle[i].classList.add("attiva");
  }
}