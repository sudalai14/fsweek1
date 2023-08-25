// quiz.js
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;

nextButton.addEventListener('click', showNextQuestion);

function showQuestion(question) {
  questionElement.innerText = question.question;
  answerButtons.innerHTML = '';
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}

function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    // Quiz finished
    questionContainer.innerHTML = '<h1>Quiz Finished</h1>';
  }
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
      // You can update the UI to indicate that the answer is correct
      answerButtons.innerHTML = '<p>Correct!</p>';
    } else {
      // You can update the UI to indicate that the answer is incorrect
      answerButtons.innerHTML = '<p>Incorrect!</p>';
    }
    
    // Disable the answer buttons after selection
    answerButtons.querySelectorAll('.btn').forEach(button => {
      button.removeEventListener('click', () => selectAnswer(answer));
      button.disabled = true;
    });
    
    // Enable the "Next" button
    nextButton.disabled = false;
  }
  

const questions = [
  {
    question: 'The keyword used to transfer control from a function back to the calling function is?',
    answers: [
      { text: 'return', correct: true },
      { text: 'go back', correct: false },
      { text: 'goto', correct: false },
      { text: 'switch', correct: false }
    ]
  },
  {
    question: 'Which of the following function is used to find the first occurrence of a given string in another string?',
    answers: [
      { text: 'strstr()', correct: true },
      { text: 'strchr()', correct: false },
      { text: 'strnset()', correct: false },
      { text: 'strrchr()', correct: false }
    ]
  },
  {
    question: 'What does the following declaration mean? int (*ptr)[10];',
    answers: [
      { text: 'ptr is a pointer to an array of 10 integers', correct: true },
      { text: 'ptr is array of pointers to 10 integers', correct: false },
      { text: 'ptr is an array of 10 integers', correct: false },
      { text: 'ptr is an pointer to array', correct: false }
    ]
  },
 
];

showQuestion(questions[currentQuestionIndex]);
