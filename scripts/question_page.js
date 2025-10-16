/*
       QUIZ GAME!

       REGOLE:
       / L'utente dovrà indovinare un certo numero di domandeThe player must guess correctly a certain amount of questions
       / Ogni risposta corretta gli darà 1 punto
       / Le domande possono avere risposte multiple o singole (true/false)
       / Al termine del quiz l'utente dovrà poter vedere il suo punteggio

       DOMANDE:
       / Le domande possono essere ottenute da questo URL ( http://bit.ly/strive_QUIZZ ) o puoi scriverne di tue
       / Possono essere composte di boolean multipli (true / false)

       TIPS:
       / Usa una variabile globale per registrare il punteggio dell'utente
       / Crea una variabile "questionNumber" per tenere traccia del numero (o posizione) della domanda presentata all'utente
       / Quando "questionNumber" è maggiore delle domande disponibili, a quel punto l'applicazione dovrà mostrare il punteggio
       / Comincia salvando le domande in una variabile (o reperiscile dall'URL fornito usando AJAX e fetch)
       / Parti con l'implementazione semplice, poi passa agli extra e ad abbellire l'interfaccia 
       / Fai test completi: controlla la console periodicamente per verificare che non ci siano errori e che il flusso di dati sia quello che ti aspetti

       EXTRA:
       / Dai un feedback sulla risposta al momento del click (corretta o sbagliata)
       / Visualizza una domanda alla volta in sequenza piuttosto che tutte assieme in forma di lista
       / Permetti all'utente di selezionare la difficoltà del quiz prima di iniziare e il numero di domande che desidera ricevere.
       ( Se hai implementato l'applicazione usando l'URL fornito, puoi ottenere i dati che ti servono in modo semplice, 
       usando query parameters in questo modo: https://opentdb.com/api.php?amount=10&category=18&difficulty=easy e modificarne il numero di domande e difficoltà )
   
       //NON DIMENTICARE...
         di fare commit & push del codice regolarmente sulla tua repository GitHub e di condividerla con i tuoi colleghi
*/

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#39;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
<<<<<<< Updated upstream
=======

  //Aggiungiamo le domande difficili
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which SQL keyword is used to fetch data from a database?",
    correct_answer: "SELECT",
    incorrect_answers: ["INDEX", "VALUES", "EXEC"],
  },

  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Time on Computers is measured via the EPOX System.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },

  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "In networking, what does OSPF stand for?",
    correct_answer: "Open Shortest Path First",
    incorrect_answers: [
      "Order State Part First",
      "Order Sense Ping Find",
      "Open Signal Path Finder",
    ],
  },

  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "The programming language &#039;Swift&#039; was created to replace what other programming language?",
    correct_answer: "Objective-C",
    incorrect_answers: ["C#", "Ruby", "C++"],
  },

  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which computer language would you associate Django framework with?",
    correct_answer: "Python",
    incorrect_answers: ["C#", "C++", "Java"],
  },

  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "How many values can a single byte represent?",
    correct_answer: "256",
    incorrect_answers: ["8", "1", "1024"],
  },

  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "In most programming languages, the operator ++ is equivalent to the statement &quot;+= 1&quot;.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },

  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "How many kilobytes in one gigabyte (in decimal)?",
    correct_answer: "1000000",
    incorrect_answers: ["1024", "1000", "1048576"],
  },

  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question: "The Windows ME operating system was released in the year 2000.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },

  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question: "RAM stands for Random Access Memory.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },

  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question: "JavaScript derives from a later version of Java",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
>>>>>>> Stashed changes
]

window.onload = function () {
  // TIPS:
  // SE MOSTRI TUTTE LE RISPOSTE ASSIEME IN FORMATO LISTA:
  // Per ogni domanda, crea un container e incorporale tutte all'interno.
  // Crea poi dei radio button
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
  // con le risposte corrette e incorrette come opzioni
  // (dovrai probabilmente cercare su un motore di ricerca come ottenere un valore da un radio button in JS per ottenere il punteggio finale)
  //
  // SE MOSTRI UNA DOMANDA ALLA VOLTA:
  // Mostra la prima domanda con il testo e i radio button.
  // Quando l'utente seleziona una risposta, passa alla domanda successiva dell'array e sostituisci quella precedentemente visualizzata con quella corrente,
  // salvando le risposte dell'utente in una variabile
}

// Come calcolare il risultato? Hai due strade:
// Se stai mostrando tutte le domande nello stesso momento, controlla semplicemente se i radio button selezionati sono === correct_answer
// Se stai mostrando una domanda alla volta, aggiungi semplicemente un punto alla variabile del punteggio che hai precedentemente creato SE la risposta selezionata è === correct_answer

// GRAFICO
let timerChart = null

const updateTimerChart = function () {
  const elapsed = 20 - countDownTime
  const remaining = countDownTime

  const data = {
    datasets: [
      {
        data: [elapsed, remaining],
        backgroundColor: ["rgba(185, 184, 184, 0.1)", "#00ffff"],
        borderWidth: 0,
      },
    ],
  }

  if (!timerChart) {
    timerChart = new Chart("timerChart", {
      type: "doughnut",
      data: data,
      options: {
        cutoutPercentage: 80,
        plugins: {
          tooltip: { enabled: false },
        },
      },
    })
  } else {
    timerChart.data.datasets[0].data = [elapsed, remaining]
    timerChart.update()
  }
}

//FUNZIONE PER IL TIMER
let countDownTime = 20
let indiceDomande = 0
let intervalId = null
let punteggio = 0 //variabile dove ciclare il punteggio ottenuto

const countDownElement = document.getElementById("timer")

const timer = function () {
  if (intervalId) {
    clearInterval(intervalId)
  }

  countDownTime = 20
  countDownElement.innerHTML = `<p class="scrittaTimer">SECONDS</p> 
        <p class="numTimer">${countDownTime}</p>
        <p class="scrittaTimer"> REMAINIG</p>`
<<<<<<< Updated upstream
=======
  updateTimerChart()
>>>>>>> Stashed changes

  intervalId = setInterval(function () {
    countDownTime--
    countDownElement.innerHTML = `<p class="scrittaTimer">SECONDS</p> 
        <p class="numTimer">${countDownTime}</p>
        <p class="scrittaTimer"> REMAINIG</p>`
    updateTimerChart()

    if (countDownTime <= 0) {
      clearInterval(intervalId)
      intervalId = null
      nextQuestion() //PASSA AUTOMATICAMENTE ALLA PROSSIMA DOMANDA
    }
  }, 1000)
}
timer()

//FUNZIONI DOMANDE

const nextQuestion = function () {
  const risposte = document.getElementsByName("risposta")
  let rispostaSelezionata = ""

  for (let i = 0; i < risposte.length; i++) {
    if (risposte[i].checked) {
      rispostaSelezionata = risposte[i].value
      break
    }
  }

  if (rispostaSelezionata === questions[indiceDomande].correct_answer) {
    punteggio++
<<<<<<< Updated upstream
=======
    feedEl.innerText = "✅CORRECT!"
    feedEl.style.color = "green"
  } else {
    feedEl.innerText = "❌WRONG!"
    feedEl.style.color = "red"
>>>>>>> Stashed changes
  }
  console.log("Punteggio:", punteggio)

  indiceDomande++
  if (indiceDomande < questions.length) {
    currentQuestion()
    timer()
  } else {
    localStorage.setItem("punteggioFinale", punteggio)
    window.location.href = "result.html"

    localStorage.setItem("numeroDomande", questions.length)
  }
}

let arrayDiRisposte = []

const currentQuestion = function () {
  const quizContainer = document.getElementById("domande")
  quizContainer.innerHTML = ""

  const domanda = questions[indiceDomande].question
  const titoloDomande = document.createElement("h2")
  titoloDomande.classList.add("titolo_domande")
  titoloDomande.innerHTML = domanda

  const resultContainer = document.getElementById("risposte-div")
  resultContainer.innerHTML = ""

  const arrayDiRisposte = [
    questions[indiceDomande].correct_answer,
    ...questions[indiceDomande].incorrect_answers,
  ]
  arrayDiRisposte.sort(() => Math.random() - 0.5) // mescola le risposte

  const risposte = document.createElement("div")
  for (let i = 0; i < arrayDiRisposte.length; i++) {
    risposte.innerHTML += `
    <div class="div_risposte">
    <input type="radio" onclick="nextQuestion()" name="risposta"  id="bottone_risposta${i}" value="${arrayDiRisposte[i]}" />
    <label class= "class_bottone" for="bottone_risposta${i}">${arrayDiRisposte[i]}</label>
    </div>
    `
  }

  resultContainer.appendChild(risposte)

  quizContainer.appendChild(titoloDomande)
  const counterQuestion = document.getElementById("p_question")

  counterQuestion.innerHTML = `QUESTION ${
    indiceDomande + 1
  } <b id="indice_rosa">/ ${questions.length}</b>`
}

currentQuestion()
