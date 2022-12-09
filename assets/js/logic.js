// getting variables from HTML files

var start = document.getElementById("start");
var questionTitle = document.getElementById("question-title");
var choices1 = document.getElementById("1");
var choices2 = document.getElementById("2");
var choices3 = document.getElementById("3");
var choices4 = document.getElementById("4");
var counter = document.getElementById("counter");
var end = document.getElementById("end-screen");
var timeEl = document.getElementById("time");
var Timer = document. querySelector("#timer");
var questionsDiv = document.getElementById("questions");
var startScreenDiv = document.getElementById("start-screen");
// creating variables
var lastQuestion = questions.length - 1; //index of last question 
var runningQuestion = 0;
var score = 0;
// questions = [];

//render a question
//create another variable so don't have to type everytime and just use variable
function  renderQuestion () {
    console.log("runningQuestion = ", runningQuestion);
    var q = questions[runningQuestion];
        questionTitle.textContent = q.question;
        choices1.textContent = q.choices1;
        choices2.textContent = q.choices2;
        choices3.textContent = q.choices3;
        choices4.textContent = q.choices4;
    
    } 

//render Time
var time = 60;
// var questionTime = 10; //10s each question has 10 seconds
function renderTime(){
    if (time >= 0){
        time--;
        timeEl.textContent = time;
    }
    else {
        time = 0;
        if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
         }
         else{
            //end quiz and show score
            clearInterval(Timer);
            scoreRender();
         }
    }
}

//event listner
start.addEventListener("click", startQuiz);


//start quiz
function startQuiz() {
console.log("startQuiz");
    startScreenDiv.style.display ="none";
    renderQuestion();
    questionsDiv.style.display ="block";
    renderTime();
    Timer = setInterval (renderTime, 1000); //1000ms
}
function checkAnswers0 (){
    console.log("checkAnswers0");
    checkAnswers(
        questions[runningQuestion].choices1
    );
    }
   
    function checkAnswers1 (){
        console.log("checkAnswers1");
        checkAnswers(
            questions[runningQuestion].choices2
        );
    }

    function checkAnswers2 (){
        console.log("checkAnswers2");
        checkAnswers(
            questions[runningQuestion].choices3
        );
    }

    function checkAnswers3 (){
        console.log("checkAnswers3");
        checkAnswers(
            questions[runningQuestion].choices4
        );
    }
//Check Answer
function checkAnswers(answer) {
    if (answer == questions[runningQuestion].correct) {
        //answer is correct
        //need to add correct audio file
        score++;
        answerIsCorrect();
    }
    else {
        //answer is wrong
        //need to add correct audio file
        answerIsWrong();
      }

    //checking if there is any left questions
   time = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    }
    else {
        //end quiz and show the score
        clearInterval(Timer);
    }
}

//answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion)//figure out how to attace audio file
}

//answer is wrong
function answerIsWrong(){
    document.getElementById(runningQuestion)//figure out how to attace audio file
}

//score render

function scoreRender(){

    //calculate % of correct answers
    var scorePerCent = Math.round(100 * score/questions.length);
}

//NOTES
// score render function is incomplete, need to link it still with person names etc
//have created these by watching this link, 
//https://www.youtube.com/watch?v=49pYIMygIcU
//understand why and he is doing it but not sure why not working on mine.