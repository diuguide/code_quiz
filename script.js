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
const resetBtn = document.getElementById("resetbtn");

let questions = [
  {
      question: "Which of these is not a programming language?",
      choiceA: "html",
      choiceB: "javascript",
      choiceC: "poothon",
      choiceD: "php",
      correct: "C"
  },{
      question: "Which of the following is a commonly used data type?",
      choiceA: "bergs",
      choiceB: "beans",
      choiceC: "bits",
      choiceD: "boops",
      correct: "C"
  },{
      question: "What is the command to clone a github repository to your local hard drive?",
      choiceA: "gitgrab",
      choiceB: "up_clone",
      choiceC: "git clone",
      choiceD: "server HTTPS request pull action",
      correct: "C"
  },{
      question: "What is the total data mass of the internet in bytes?",
      choiceA: "18 mebibytes",
      choiceB: "18 zettabytes",
      choiceC: "18 yottabytes",
      choiceD: "18 petabytes",
      correct: "B"
  }
];

const lastQuestion = questions.length -1;
let runningQuestion = 0;
let count = 75;
let score = 0;
let clock;

function renderQuestion() {
  let q = questions[runningQuestion];
  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

function renderCounter() {
      counter.innerHTML = "Time Remaining: " + count;
      count--;
      if(count == 0) {
        finalScore();
      }
}
start.addEventListener('click', startQuiz);
function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  renderCounter();
  quizBox.style.display = "block";
  lowerBoard.style.display = "block";
  clock = setInterval(renderCounter,1000);
  }

function checkAnswer(answer) {
  if(answer == questions[runningQuestion].correct) {
      score = score + 500;
      alert("Correct!");
      scoreRender();    
  }else {
      count = count - 25;
      alert("Wrong!");
      scoreRender();
  }
  if(runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
  }else {
    finalScore();
    clearInterval(clock);
  }
    

}

function scoreRender() {
    scoreBoard.style.display = "block";
    scoreBoard.innerHTML = "CURRENT SCORE: " + score;
}

function finalScore() {
  submitScore.style.display = "block";
  resetBtn.style.display = "block";
  lowerBoard.style.display = "none";
  quizBox.innerHTML = "<h1>GAME OVER! Score: " + score;
  localStorage.setItem('score', score);
}
submitBtn.addEventListener('click', function renderHighscores() {
  event.preventDefault();
  submitScore.style.display = "none";
  quizBox.style.display = "none";
  let name = prompt('Please enter your initials');
  localStorage.setItem('name', name);
  highScores.innerHTML = "<h1>HIGH SCORES</h1><hr><h2>" + localStorage.getItem('name') + ":" + localStorage.getItem('score') + "</h2>";  
});
