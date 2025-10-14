window.onload = function () {
punteggio()
};

const punteggio = function(){
    const punteggio = localStorage.getItem("punteggioFinale");
    const totPunteggio = document.getElementById("div_punti");
    const totSbagliate = document.getElementById("sbagliate");
    const numDomande = localStorage.getItem("numeroDomande")
    const punteggioSbagliato = numDomande - punteggio
    const percentualeGiuste = (punteggio / numDomande) * 100
    const percentualeSbagliate = (punteggioSbagliato / numDomande) * 100

    //mostra le percentuali del punteggio giuste e sbagliate
    totPunteggio.innerHTML = `<p>Correct: ${percentualeGiuste}% ${punteggio}/${numDomande} </p>`;
    totSbagliate.innerHTML = `<p>Wrong: ${percentualeSbagliate}% ${punteggioSbagliato}/${numDomande} </p>`;


    //Funzione che mostra messaggio
const messageResult = function(){
    if(percentualeGiuste>=60){
        const divMessage = document.getElementById("message")
        divMessage.innerHTML = `<b>Congratulations!<b/>
        <p class="accent">You passed the exam.</p>
<p>We'll send you the certificate in few minutes.
Check your email (including promotions / spam folder)
        </p>`
    }else{
         const divMessage = document.getElementById("message")
        divMessage.innerHTML = `<p> Sorry!
        You didn't pass the exam.
        Try next time.
        </p>`
    }
}
messageResult()
}
