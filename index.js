var readlineSync = require("readline-sync");

var score = 0;

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to KAUN BANEGA SCOREPATI");
}

var questions = [{
  question: "Who is the first PM of India? ",
  answer: "Nehru"
}, {
  question: "Who has scored the highest number of runs in ODI cricket ? ",
  answer: "Sachin"
},
{
  question: "How many states are there in India? ",
  answer: "28"
},
{
  question: "Which city is known as Pink City in India? ",
  answer: "Jaipur"
},
{
  question: "Shah Rukh Khan is owner of which IPL team? ",
  answer: "KKR"
}];

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Correct answer!");
    score = score + 1;
    
  } else {
    console.log("Sorry, wrong answer!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}



function showScores() {
  console.log("CONGRATULATIONS! You SCORED: ", score);
}


welcome();
game();
showScores();