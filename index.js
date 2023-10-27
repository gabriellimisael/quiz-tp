const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}





































const questions = [
    {
      question: "Qual a tolerância máxima para dar inicio ao atendimento?",
      answers: [
        { text: "1 minuto", correct: false },
        { text: "5 minutos", correct: false },
        { text: "3 minutos", correct: true },
        { text: "7 minutos", correct: false }
      ]
    },
    {
      question: "Quantos emojis devem ser utilizados no mínimo em cada interação?",
      answers: [
        { text: "No mínimo 5 emojis", correct: true },
        { text: "No mínimo 3 emojis", correct: false },
        { text: "No mínimo 2 emojis", correct: false },
        { text: "No mínimo 1 emoji", correct: false }
      ]
    },
    {
      question: 'Caso cliente já tenha algumas informações no BOT, eu devo perguntar novamente?',
      answers: [
        { text: 'Não, no meu script deve ter "desconsidere caso já tenha informado"', correct: true },
        { text: 'Sim, pra que vou ler o bot', correct: false },
        { text: 'Não, nem faço a confirmação positiva', correct: false },
        { text: "Todas as alternativas estão corretas", correct: false }
      ]
    },
    {
      question: 'Devo interromper o cliente no decorrer do seu relato?',
      answers: [
        { text: "Verdadeiro", correct: false },
        { text: "Falso", correct: true }
      ]
    },
    {
      question: 'Quando o cliente se demonstrar insatisfeito, eu...?',
      answers: [
        { text: 'Nem ligo, afinal a vida é assim', correct: false },
        { text: 'Peço desculpas e informo que farei o possível para ajudá-lo', correct: true },
        { text: 'Sigo normalmente fazendo a Kátia', correct: false },
        { text: 'É sobre isso, e tá tudo bem', correct: false }
      ]
    },
    {
      question: 'Gerundismo é proíbido, então como você responderia nesse caso?',
      answers: [
        { text: 'Estarei verificando seu cadastro', correct: false },
        { text: 'Aguarde um momento enquanto verifico seu cadastro', correct: true },
      ]
    },
    {
      question: 'Posso utilizar caixa alta durante a conversa com o cliente?',
      answers: [
        { text: 'CLARO', correct: false },
        { text: 'Não, não é legal gritar virtualmente', correct: true },
      ]
    },
    {
        question: "Como posso humanizar meus atendimentos?",
        answers: [
          { text: "Ser curto e grosso com meu cliente", correct: false },
          { text: "Ser engessado e deixar a objetividade de lado", correct: false },
          { text: "Chamá-lo pelo nome ou como ele se sinta confortável", correct: true },
          { text: "Nenhuma das anteriores", correct: false }
        ]
      },
      {
        question: "Como realizar uma sondagem correta com meu cliente?",
        answers: [
          { text: "Abrir a tratativa de acordo com meu coração", correct: false },
          { text: "A tratativa sempre será o motivo do contato", correct: false },
          { text: "Analisar minuciosamente cada caso e protocolos em aberto", correct: true },
        ]
      },
      {
        question: "Enquanto verifico as informações do cadastro, eu...",
        answers: [
          { text: "Deixo o cliente a deriva", correct: false },
          { text: "No mínimo, ele deve saber que tem que aguardar", correct: false },
          { text: "Informo que irei me ausentar, e que pode me chamar a qualquer momento", correct: true },
          { text: "Nenhuma das alternativas", correct: false }
        ]
      },
      {
        question: "Ao final de cada atendimento, eu...",
        answers: [
          { text: "Informo ao cliente toda a tratativa, SLA e protocolo", correct: true },
          { text: "Só encerro e tchau", correct: false },
          { text: "Nem atendo, dobro e passo para o próximo", correct: false },
        ]
      },
      {
        question: "Quando o cliente pergunta a mesma coisa que acabei de responder, eu...",
        answers: [
          { text: "Explico de uma outra forma, pois da primeira não deve ter ficado clara", correct: true },
          { text: "Deixo no vácuo", correct: false },
          { text: "Peço pra ler novamente o que escrevi acima", correct: false },
          { text: "Deixo cair", correct: false }
        ]
      },
      {
        question: "Antes de finalizar o atendimento, o que devo fazer?",
        answers: [
          { text: "Solto o verbo e encerro", correct: false },
          { text: "Mando uma receita de bolo", correct: false },
          { text: "Pergunto se ajudo em algo mais, e agradeço a oportunidade de ter ajudado", correct: true },
          { text: "Nenhuma das alternativas", correct: false }
        ]
      },
      {
        question: "Quando o cliente está inativo, eu...",
        answers: [
          { text: "Encerro com 3 minutos, não tenho paciência pra quem tá começando", correct: false },
          { text: "Espero a benção o tempo que for necessário", correct: false },
          { text: "Respeito o encerramento de 5+5 e encerro após registro no RN", correct: true },
        ]
      },
      {
        question: "Como posso humanizar meus atendimentos?",
        answers: [
          { text: "Ser curto e grosso com meu cliente", correct: false },
          { text: "Ser engessado e deixar a objetividade de lado", correct: false },
          { text: "Chamá-lo pelo nome ou como ele se sinta confortável", correct: true },
          { text: "Todas estão corretas", correct: false }
        ]
      },
  ]