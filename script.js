
const placarAcert = document.querySelector(".placar #acerto");
const placarErro = document.querySelector(".placar #erro")
let acerto = 0;
let erro = 0;
const questions = [
  {
     question: "Qual é a capital da França?",
     options: ["Londres", "Berlim", "Paris", "Madrid"],
     answer: "Paris"
  }, 
  {
     question: "Qual é o maior planeta do sistema solar?",
     options: ["Terra", "Júpiter", "Saturno", "Marte"],
     answer: "Júpiter"
  },
  {
    question: "Quem é o presidende do brasil?",
    options: ["Lula", "Dilma", "Gustavo Guanabara", "Bolsonaro"],
    answer: "Lula"
 },
 {
  question: "Em que ano o brasil foi descoberto?",
  options: ["1600", "1700", "200", "1500"],
  answer: "1500"
},
];

let currentQuestionIndex = 0;


function showQuestion(question)
{
  // Pegar o elemento da div vazia no html
  const questionContainer = document.getElementById("question-container");

   
  // Incluir a questão dentro da div vazia 
  questionContainer.innerHTML = `
      
          <h2>${question.question}</h2>

         <div class="opcao"> 
          ${
             question.options.map(
                  (option, index) => `
                    <button id="valor"  onclick="select('${option}')" class="button">${option}</button>
                  `
             ).join('')
          }
          
      </div>
  `;
  
}

function select(selectedOption){
  // Verifica se a resposta está correta

  if(currentQuestionIndex > questions.length - 1){
    alert("Quiz conpleto");
  }
  if(selectedOption === questions[currentQuestionIndex].answer){
    alert("Resposta correta!");
    acerto++;
    placarAcert.innerText = "Acertos " + acerto;
  } else {
    alert("Resposta errada!");
    erro++;
    placarErro.innerText = "Erros " + erro;
  }
  currentQuestionIndex++;
  showQuestion(questions[currentQuestionIndex]);
}




showQuestion(questions[currentQuestionIndex]);

 



