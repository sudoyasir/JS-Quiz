const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Makeup Language"],
      correctAnswer: 0
    },
    {
      question: "Which CSS property is used to change the text color of an element?",
      options: ["font-color", "color", "text-color", "text-style"],
      correctAnswer: 1
    },
    {
      question: "Which JavaScript function is used to add a new element to the end of an array?",
      options: ["append()", "push()", "add()", "concat()"],
      correctAnswer: 1
    },
    {
      question: "In which year was the JavaScript programming language first introduced?",
      options: ["1995", "2000", "1985", "2010"],
      correctAnswer: 0
    },
    {
      question: "What is the correct way to write a comment in JavaScript?",
      options: ["//This is a comment", "<!--This is a comment-->", "Comment: This is a comment", "/*This is a comment*/"],
      correctAnswer: 0
    },
    {
      question: "Which symbol is used for 'strict equality' in JavaScript?",
      options: ["==", "===", "=", "=!"],
      correctAnswer: 3
    },
    {
      question: "Which method is used to remove the last element from an array in JavaScript?",
      options: ["removeLast()", "pop()", "shift()", "slice()"],
      correctAnswer: 1
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<hyperlink>"],
      correctAnswer: 1
    },
    {
      question: "Which of the following is not a primitive data type in JavaScript?",
      options: ["string", "number", "boolean", "array"],
      correctAnswer: 3
    },
    {
      question: "What does CSS stand for?",
      options: ["Computer Style Sheets", "Colorful Style Sheets", "Creative Style Sheets", "Cascading Style Sheets"],
      correctAnswer: 3
    }
  ];
  

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options");
const resultText = document.getElementById("result-text");

function displayQuestion() {
  if (currentQuestion < questions.length) {
    const question = questions[currentQuestion];
    questionText.textContent = question.question;
    optionsList.innerHTML = "";
    question.options.forEach((option, index) => {
      const optionButton = document.createElement("button");
      optionButton.classList.add("option");
      optionButton.textContent = option;
      optionButton.dataset.index = index; // Store the option's index
      optionButton.addEventListener("click", () => checkAnswer(optionButton, question.correctAnswer));
      optionsList.appendChild(document.createElement("li")).appendChild(optionButton);
    });
  } else {
    questionText.textContent = "Quiz completed!";
    optionsList.innerHTML = "";
    resultText.textContent = `Your score: ${score} / ${questions.length}`;
  }
}

function checkAnswer(selectedOption, correctAnswerIndex) {
  if (parseInt(selectedOption.dataset.index) === correctAnswerIndex) {
    score++;
    resultText.textContent = "Correct!";
  } else {
    resultText.textContent = "Incorrect!";
  }
  currentQuestion++;
  displayQuestion();
}

displayQuestion();
