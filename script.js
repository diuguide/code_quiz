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
let count = 150;
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
        alert("You Lose!")
      }
}

renderQuestion();
clock = setInterval(renderCounter,1000);

function checkAnswer(answer) {
  if(answer == questions[runningQuestion].correct) {
      score++;
      count = count + 10;
      alert("answer is correct");
      scoreRender();    
  }else {
      score--;
      count = count - 10;
      alert("answer is wrong");
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
    const currentScore = score;
    scoreBoard.innerHTML = "CURRENT SCORE: " + score;
}

function finalScore() {
  scoreBoard.style.display = "none";
  counter.style.display = "none";
  lowerBoard.style.display = "none";
  submitScore.style.display = "block";
  quizBox.innerHTML = "<h1>Your Final Score is: " + score;
  submitBtn.addEventListener('click', renderHighscore);
}

function renderHighscore() {
  quizBox.style.display = "none";
  
}