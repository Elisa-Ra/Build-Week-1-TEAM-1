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
  totPunteggio.innerHTML = `<h1>Correct </br><b>${percentualeGiuste}%</b></h1> </br><p>${punteggio}/${numDomande} questions</p>`
  totSbagliate.innerHTML = `<h1>Wrong </br><b>${percentualeSbagliate}%</b></h1> </br><p>${punteggioSbagliato}/${numDomande} questions </p>`

  //Funzione che mostra messaggio
  const messageResult = function () {
    if (percentualeGiuste >= 60) {
      const divMessage = document.getElementById("message")
      divMessage.innerHTML = `<b>Congratulations!<b/>
        <p class="accent">You passed the exam.</p>
<p id="tiny_p">We'll send you the certificate</br> in few minutes. </br>
Check your email (including</br> promotions / spam folder)
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

const yValues = [punteggioSbagliato, punteggio]
const barColors = ["#d20094", "#00ffff"]

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
