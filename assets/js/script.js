const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const questionContainerElement = document.getElementById('question-container');
let shuffledQuestions, currentQuestionIndex;
const questionElement = document.getElementById('question');
const optionButtonsElement = document.getElementById('option-button');

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startQuiz() {
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;  
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);

}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answer.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('button');
    if (answer.correct); {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function optionSelection(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }  
}

function setStatusClass(element, correct) {
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

const questions = [
  {
    question: "Where does coffee come from?",
    answer:[
      { text: "Ethiopia", Correct: true },
      { text: "Italy", Correct: false },
      { text: "France", Correct: false },
      { text: "from a nearby store", Correct: false }
    ]        
  },
  {
    question: "Which is not a roasting method?",
    answer:[{ text: "Spanish", isCorrect: false },
             { text: "Italian", isCorrect: false },
             { text: "French", isCorrect: false },
             { text: "British", isCorrect: true }]        
  },
  {
    question: "What color is the ripe coffee berry?",
    answer:[{ text: "Yellow", isCorrect: false },
             { text: "Green", isCorrect: false },
             { text: "Red", isCorrect: true },
             { text: "Blue", isCorrect: false }]        
  },
  {
    question: "There is really no caffeine in decaffeinated coffee?",
    answer:[{ text: "Yes, it is true", isCorrect: false },
             { text: "Decaffeinated coffee contains 2-6% caffeine", isCorrect: true },
             { text: "Maybe, it is true", isCorrect: false },
             { text: "What does decaffeinated coffee mean?", isCorrect: false }]        
  },
  {
    question: "Where they produce the most coffee in the world?",
    answer:[{ text: "Vietnam", isCorrect: false },
             { text: "Brasil", isCorrect: true },
             { text: "Ethiopia", isCorrect: false },
             { text: "India", isCorrect: false }]        
  },
  {
    question: "What is not the main characteristic of robusta coffees?",
    answer:[{ text: "acidic", isCorrect: false },
             { text: "high in caffeine", isCorrect: false },
             { text: "dark brown", isCorrect: true },
             { text: "full-bodied", isCorrect: false }]
  },
  {
    question: "What is not the main characteristic of arabica coffees?",
    answer:[{ text: "sweeter than the robusta", isCorrect: false },
             { text: "low in caffeine", isCorrect: false },
             { text: "light-bodied", isCorrect: false },
             { text: "smaller beans", isCorrect: true }]
  },
  {
    question: "When coffee was discovered?",
    answer:[{ text: "15th century", isCorrect: true },
             { text: "16th century", isCorrect: false },
             { text: "17th century", isCorrect: false },
             { text: "19th century", isCorrect: false }]
  },
  {
    question: "What percentage of the coffee stays warm if we add cream to it?",
    answer:[{ text: "10%", isCorrect: false },
             { text: "20%", isCorrect: true },
             { text: "30%", isCorrect: false },
             { text: "if you have a microwave oven, always", isCorrect: false }]
  },
  {
    question: "In which country do people drink the most coffee?",
    answer:[{ text: "USA", isCorrect: false },
             { text: "Finland", isCorrect: true },
             { text: "Russia", isCorrect: false },
             { text: "Vietnam", isCorrect: false }]
  }
  ];
  