const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-button');

let shuffledQuestions, currentQuestionIndex;
let scorenumbers = document.getElementById('scores');
let endresult = document.getElementById('end-result');
let lastMessage = document.getElementById('last-message');

/** Give next button to the page */

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

/** Start the game and provide the posibility to shuffle the questions */

function startQuiz() {
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  console.log('sq', shuffledQuestions);
  currentQuestionIndex = 0;
  setNextQuestion();
}

/** Provide questions to the game and the possibility of choose */

function showQuestion(questions) {
  console.log('here: ', questions);
  questionElement.innerText = questions.question;
  questions.answer.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('button');
    if (answer.correct); {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', optionSelection);
    optionButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }
}

/** Provide selection from answers and after the choosing the next button will appear */

function optionSelection(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(optionButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    
    startButton.innerText = 'Restart';
  }  
}

function checkAnswer() {

  let userAnswer = document.getElementById("option-box").value;
  let calculatedAnswer = optionSelection('true');
  let correct = userAnswer === calculatedAnswer['true'];

  if (correct) {
      incrementScore();
  } else {
      incrementFalseAnswer();
  }
}

function setStatusClass(element) {
  clearStatusClass(element);
  if ('correct') {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

/** Gets the correct answers from the DOM and increments it by 1 */

function incrementScore() {

  let newScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++newScore;

}

/** Gets the incorrect answers from the DOM and increments it by 1 */
function incrementFalseAnswer() {

  let newScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++newScore;
  
}

/** Provide the list of questions marked with true and false value */

const questions = [
  {
    question: "Where does coffee come from?",
    answer:[
      { text: "Ethiopia", correct: true },
      { text: "Italy", correct: false },
      { text: "France", correct: false },
      { text: "from a nearby store", correct: false }
    ]        
  },
  {
    question: "Which is not a roasting method?",
    answer:[
      { text: "Spanish", correct: false },
      { text: "Italian", correct: false },
      { text: "French", correct: false },
      { text: "British", correct: true }
    ]        
  },
  {
    question: "What color is the ripe coffee berry?",
    answer:[
      { text: "Yellow", correct: false },
      { text: "Green", correct: false },
      { text: "Red", correct: true },
      { text: "Blue", correct: false }
    ]        
  },
  {
    question: "There is really no caffeine in decaffeinated coffee?",
    answer:[
      { text: "Yes, it is true", correct: false },
      { text: "Decaffeinated coffee contains 2-6% caffeine", correct: true },
      { text: "Maybe, it is true", correct: false },
      { text: "What does decaffeinated coffee mean?", correct: false }
    ]        
  },
  {
    question: "Where they produce the most coffee in the world?",
    answer:[
      { text: "Vietnam", correct: false },
      { text: "Brasil", correct: true },
      { text: "Ethiopia", correct: false },
      { text: "India", correct: false }
    ]        
  },
  {
    question: "What is not the main characteristic of robusta coffees?",
    answer:[
      { text: "acidic", correct: false },
      { text: "high in caffeine", correct: false },
      { text: "dark brown", correct: true },
      { text: "full-bodied", correct: false }
    ]
  },
  {
    question: "What is not the main characteristic of arabica coffees?",
    answer:[
      { text: "sweeter than the robusta", correct: false },
      { text: "low in caffeine", correct: false },
      { text: "light-bodied", correct: false },
      { text: "smaller beans", correct: true }
    ]
  },
  {
    question: "When coffee was discovered?",
    answer:[
      { text: "15th century", correct: true },
      { text: "16th century", correct: false },
      { text: "17th century", correct: false },
      { text: "19th century", correct: false }
    ]
  },
  {
    question: "What percentage of the coffee stays warm if we add cream to it?",
    answer:[
      { text: "10%", correct: false },
      { text: "20%", correct: true },
      { text: "30%", correct: false },
      { text: "if you have a microwave oven, always", correct: false }
    ]
  },
  {
    question: "In which country do people drink the most coffee?",
    answer:[
      { text: "USA", correct: false },
      { text: "Finland", correct: true },
      { text: "Russia", correct: false },
      { text: "Vietnam", correct: false }
    ]
  }
  ];
  
  startQuiz();