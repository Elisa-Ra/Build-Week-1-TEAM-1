window.onload = function () {
  const punteggio = localStorage.getItem("punteggioFinale");
  const totPunteggio = document.getElementById("div_punti");
  totPunteggio.innerHTML = `<p>Correct: ${punteggio}</p>`;
};
