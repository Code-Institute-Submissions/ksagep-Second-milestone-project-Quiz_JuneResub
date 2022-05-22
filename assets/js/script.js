const startButton = getElementById('start-button')
const questionContainerElement = document.getElementById('question-container')
const shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const optionButtonElement = document.getElementById('option-button')

startButton.addEventListener('click', startQuiz)

function startQuiz() {
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
}

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {

}

function optionSelection() {

}

const questions = [
  {
    id: 0,
    question: "Where does coffee come from?",
    answer:[
      { text: "Ethiopia", Correct: true },
      { text: "Italy", Correct: false },
      { text: "France", Correct: false },
      { text: "from a nearby store", Correct: false }
    ]        
  },
  {
    id: 1,
    question: "Which is not a roasting method?",
    answer:[{ text: "Spanish", isCorrect: false },
             { text: "Italian", isCorrect: false },
             { text: "French", isCorrect: false },
             { text: "British", isCorrect: true }]        
  },
  {
    id: 2,
    question: "What color is the ripe coffee berry?",
    answer:[{ text: "Yellow", isCorrect: false },
             { text: "Green", isCorrect: false },
             { text: "Red", isCorrect: true },
             { text: "Blue", isCorrect: false }]        
  },
  {
    id: 3,
    question: "There is really no caffeine in decaffeinated coffee?",
    answer:[{ text: "Yes, it is true", isCorrect: false },
             { text: "Decaffeinated coffee contains 2-6% caffeine", isCorrect: true },
             { text: "Maybe, it is true", isCorrect: false },
             { text: "What does decaffeinated coffee mean?", isCorrect: false }]        
  },
  {
    id: 4,
    question: "Where they produce the most coffee in the world?",
    answer:[{ text: "Vietnam", isCorrect: false },
             { text: "Brasil", isCorrect: true },
             { text: "Ethiopia", isCorrect: false },
             { text: "India", isCorrect: false }]        
  },
  {
    id: 5,
    question: "What is not the main characteristic of robusta coffees?",
    answer:[{ text: "acidic", isCorrect: false },
             { text: "high in caffeine", isCorrect: false },
             { text: "dark brown", isCorrect: true },
             { text: "full-bodied", isCorrect: false }]
  },
  {
    id: 6,
    question: "What is not the main characteristic of arabica coffees?",
    answer:[{ text: "sweeter than the robusta", isCorrect: false },
             { text: "low in caffeine", isCorrect: false },
             { text: "light-bodied", isCorrect: false },
             { text: "smaller beans", isCorrect: true }]
  },
  {
    id: 7,
    question: "When coffee was discovered?",
    answer:[{ text: "15th century", isCorrect: true },
             { text: "16th century", isCorrect: false },
             { text: "17th century", isCorrect: false },
             { text: "19th century", isCorrect: false }]
  },
  {
    id: 8,
    question: "What percentage of the coffee stays warm if we add cream to it?",
    answer:[{ text: "10%", isCorrect: false },
             { text: "20%", isCorrect: true },
             { text: "30%", isCorrect: false },
             { text: "if you have a microwave oven, always", isCorrect: false }]
  },
  {
    id: 9,
    question: "In which country do people drink the most coffee?",
    answer:[{ text: "USA", isCorrect: false },
             { text: "Finland", isCorrect: true },
             { text: "Russia", isCorrect: false },
             { text: "Vietnam", isCorrect: false }]
  }
  ];
  /** Set start **/
  var start = true;
  /** Iterate **/
  function iterate(id) {
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
    const question = document.getElementById("question");
    question.innerText = questions[id].question;
    /** Get the options and provide option text**/
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
    op1.innerText = questions[id].answer[0].text;
    op2.innerText = questions[id].answer[1].text;
    op3.innerText = questions[id].answer[2].text;
    op4.innerText = questions[id].answer[3].text;
    /** The false and true value to the options **/
    op1.value = questions[id].answer[0].isCorrect;
    op2.value = questions[id].answer[1].isCorrect;
    op3.value = questions[id].answer[2].isCorrect;
    op4.value = questions[id].answer[3].isCorrect;
    var selected = "";
    /** Selections for ops **/
    op1.addEventListener(
          "click", () => {
          op1.style.backgroundColor = "blue";
          op2.style.backgroundColor = "floralwhite";
          op3.style.backgroundColor = "floralwhite";
          op4.style.backgroundColor = "floralwhite";
          selected = op1.value;
      }
    );
    op2.addEventListener(
          "click", () => {
          op1.style.backgroundColor = "floralwhite";
          op2.style.backgroundColor = "blue";
          op3.style.backgroundColor = "floralwhite";
          op4.style.backgroundColor = "floralwhite";
          selected = op2.value;
      }
    );
    op3.addEventListener(
          "click", () => {
          op1.style.backgroundColor = "floralwhite";
          op2.style.backgroundColor = "floralwhite";
          op3.style.backgroundColor = "blue";
          op4.style.backgroundColor = "floralwhite";
          selected = op3.value;
      }
    );
    op4.addEventListener(
          "click", () => {
          op1.style.backgroundColor = "floralwhite";
          op2.style.backgroundColor = "floralwhite";
          op3.style.backgroundColor = "floralwhite";
          op4.style.backgroundColor = "blue";
          selected = op4.value;
      }
    );
    /** The evaluation buton **/
    const evaluate = document.getElementsByClassName("evaluate");
    /** Evaluate method **/
    evaluate[0].addEventListener(
      "click", () => {
          if (selected == "true") {
              result[0].innerHTML = "True";
              result[0].style.color = "green";
          } else {
              result[0].innerHTML = "False";
              result[0].style.color = "red";
          }
      }
    );
  }
  if (start) {
    iterate(0);
  }
  /** Next button and its method **/
  const next = document.getElementsByClassName('next') [0];
  var id = 0;
  next.addEventListener("click", () => {
    start = false;
    if (id <= 9) {
        id++;
        iterate(id);
        console.log(id);
    }
  });