// pull elements from HTML //

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const highscores = document.getElementById("highscores");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const scoreBoard = document.getElementById("scoreboard");
const quizBox = document.getElementById("quizbox");
const submitScore = document.getElementById("submitscore");
const lowerBoard = document.getElementById("lowerboard");
const submitName = document.getElementById("submitname");
const submitBtn = document.getElementById("submitbtn");
const highScores = document.getElementById("highscores");
const resetBtn = document.getElementById("reset");
const title = document.getElementById("titlebox");
const mostRecentScore = localStorage.getItem("mostRecentScore");

// create an array of questions //

let questions = [
  {
    question: "Which of these is not a programming language?",
    choiceA: "html",
    choiceB: "javascript",
    choiceC: "twitter",
    choiceD: "php",
    correct: "C",
  },
  {
    question: "Who was the 14th president of the United States?",
    choiceA: "Franklin Peirce",
    choiceB: "George Washington",
    choiceC: "Abraham Lincoln",
    choiceD: "Milard Fillmore",
    correct: "A",
  },
  {
    question:
      "What is the command to clone a github repository to your local hard drive?",
    choiceA: "gitgrab",
    choiceB: "up_clone",
    choiceC: "git clone",
    choiceD: "server HTTPS request pull action",
    correct: "C",
  },
  {
    question: "What is the total data mass of the internet in bytes?",
    choiceA: "18 mebibytes",
    choiceB: "18 zettabytes",
    choiceC: "18 yottabytes",
    choiceD: "18 petabytes",
    correct: "B",
  },
  {
    question: "What is the origin of the Python scripting language's name?",
    choiceA: "the snake python",
    choiceB: "Monty Python",
    choiceC: "a combination of pi and marathon",
    choiceD: "python is not a word",
    correct: "B",
  },
  {
    question: "Who is the creator of the JavaScript scripting language?",
    choiceA: "Brendan Eich",
    choiceB: "Steve Jobs",
    choiceC: "Javascript is the name of my local coffee shop not a language",
    choiceD: "It was an open source project started in 1942",
    correct: "A",
  },
];
// create variable to signal last question //
const lastQuestion = questions.length - 1;
// variable for current question //
let runningQuestion = 0;
// starting count for clock //
let count = 75;
// starting count for score //
let score = 0;
// set clock variable //
let clock;

// event listener for start button, then renders question, starts clock, hides start button, shows quiz and scoreboard, starts clock //
start.addEventListener("click", startQuiz);
function startQuiz() {
  title.style.display = "none";
  start.style.display = "none";
  renderQuestion();
  renderCounter();
  quizBox.style.display = "block";
  lowerBoard.style.display = "block";
  clock = setInterval(renderCounter, 1000);
}
// function to render question, pulls from array of questions, prints question and choices to html //
function renderQuestion() {
  let q = questions[runningQuestion];
  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}
// displays timer, ends game when time is up //
function renderCounter() {
  counter.innerHTML = count;
  count--;
  if (count <= 0) {
    alert("TIME IS UP");
    clearInterval(clock);
    finalScore();
  }
}
// checks question array for correct answer, changes score, adjusts time if question is wrong, moves to next question, or ends game and shows score //
function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    score = score + 500;
    alert("Correct!");
    scoreRender();
  } else {
    count = count - 25;
    alert("Wrong!");
    scoreRender();
  }
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    finalScore();
    clearInterval(clock);
  }
}

// renders score board, shows current score //
function scoreRender() {
  scoreBoard.style.display = "in-line";
  scoreBoard.innerHTML = "CURRENT SCORE: " + score;
}
// hides quiz and score board, displays final score and high score submit button //
function finalScore() {
  submitScore.style.display = "block";
  lowerBoard.style.display = "none";
  quizBox.innerHTML = "<h1>GAME OVER! Score: " + score;
  localStorage.setItem("mostRecentScore", score);
}

// event listener for high score button, prompts user for initials, stores information to local storage, then displays high scores from localstorage //
const hiScores = JSON.parse(localStorage.getItem("highscores")) || []; // initializes an empty high score bracket //
submitBtn.addEventListener("click", function renderHighscores() {
  event.preventDefault();
  submitScore.style.display = "none";
  quizBox.style.display = "none";
  const mostRecentScore = localStorage.getItem("mostRecentScore"); // pulls info to create new local storage //
  const initials = prompt("Please enter your Name"); //asks for input with new local storage //
  const recentScore = {
    score: mostRecentScore,
    name: initials,
  };
  hiScores.push(recentScore);                               //pushes new information to local storage //
  localStorage.setItem("highscores", JSON.stringify(hiScores)); // sets new local storage //
  highScores.innerHTML = "<h1>HIGH SCORES</h1><hr>";
  hiScores.map(function (t) {                                 // prints out stored high scores //
    let highscoreEl = document.createElement('p');
    highscoreEl.innerHTML = t.name + "-" + t.score;
    highscores.appendChild(highscoreEl);
    resetBtn.style.display = "block";
    resetBtn.addEventListener("click", function myFunction() {
      location.replace("index.html");
    });
  });

});






