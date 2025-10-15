window.onload = function () {
  punteggio_fun()
}

const punteggio_fun = function () {
  const punteggio = localStorage.getItem("punteggioFinale")
  const totPunteggio = document.getElementById("div_punti")
  const totSbagliate = document.getElementById("sbagliate")
  const numDomande = localStorage.getItem("numeroDomande")
  const punteggioSbagliato = numDomande - punteggio
  const percentualeGiuste = (punteggio / numDomande) * 100
  const percentualeSbagliate = (punteggioSbagliato / numDomande) * 100

  //mostra le percentuali del punteggio giuste e sbagliate
  totPunteggio.innerHTML = `<p>Correct: ${percentualeGiuste}% ${punteggio}/${numDomande} </p>`
  totSbagliate.innerHTML = `<p>Wrong: ${percentualeSbagliate}% ${punteggioSbagliato}/${numDomande} </p>`

  //Funzione che mostra messaggio
  const messageResult = function () {
    if (percentualeGiuste >= 60) {
      const divMessage = document.getElementById("message")
      divMessage.innerHTML = `<b>Congratulations!<b/>
        <p class="accent">You passed the exam.</p>
<p>We'll send you the certificate in few minutes.
Check your email (including promotions / spam folder)
        </p>`
    } else {
      const divMessage = document.getElementById("message")
      divMessage.innerHTML = `<b>Sorry!</b> <br>
        <p> You didn't pass the exam.
        Try next time.
        </p>`
    }
  }
  messageResult()
}

// DATI CANVAS
const punteggio = localStorage.getItem("punteggioFinale")
const numDomande = localStorage.getItem("numeroDomande")
const punteggioSbagliato = numDomande - punteggio

// CANVAS

var yValues = [punteggioSbagliato, punteggio]
var barColors = ["#d20094", "#00ffff"]

// chart

new Chart("myChart", {
  type: "doughnut",
  data: {
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
        borderWidth: 0,
      },
    ],
  },
  options: {
    cutoutPercentage: 70,
  },
})
