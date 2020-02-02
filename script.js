var questionQuiz = document.getElementById("quiz");
var questionSubmit = document.getElementById("results");
var results = document.getElementById("score");
var timer = document.getElementById("timer");

var startQuiz = document.getElementById("start");
var endExam = document.getElementById("end");
var show = document.getElementById("show");
var save = document.getElementById("save");
var retake = document.getElementById("retake");
var clear = document.getElementById("clear");
var input = document.getElementById("input");

var score = 0;
var secondsLeft = 75;
var index = 0;


function firstPage() {
    document.getElementById("end").style.visibility = "hidden";
    document.getElementById("save").style.visibility = "hidden";
    document.getElementById("show").style.visibility = "hidden";
    document.getElementById("retake").style.visibility = "hidden";
    document.getElementById("clear").style.visibility = "hidden";
    document.getElementById("input").style.visibility = "hidden";




}
firstPage();
startQuiz.addEventListener("click", function () {
    document.getElementById("end").style.visibility = "none";
    
    setTime();
    getNewQuestion(index);
    document.querySelector(".jumbotron").style.display = "none";
    document.getElementById("timer").style.visibility = "none";
    document.getElementById("timer").textContent = "time:" + secondsLeft;

});

function getNewQuestion(index) {
    var question = questions[index];
    console.log(question);
    console.log(index);
    var title = question.title;
    // console.log(title);
    var questionEl = document.getElementById("question");
    questionEl.innerHTML = title;


    var choice1 = question.choices[0];
    var answerEl1 = document.getElementById("answer1");
    answerEl1.innerHTML = choice1;
    // console.log(choice1);

    var choice2 = question.choices[1];
    var answerEl2 = document.getElementById("answer2");
    answerEl2.innerHTML = choice2;
    // console.log(choice2);

    var choice3 = question.choices[2];
    var answerEl3 = document.getElementById("answer3");
    answerEl3.innerHTML = choice3;
    // console.log(choice3);

    var choice4 = question.choices[3];
    var answerEl4 = document.getElementById("answer4");
    answerEl4.innerHTML = choice4;
    // console.log(choice4);


    document.getElementById("question").innerHTML = title;
    document.getElementById("answer1").innerHTML = choice1;
    document.getElementById("answer2").innerHTML = choice2;
    document.getElementById("answer3").innerHTML = choice3;
    document.getElementById("answer4").innerHTML = choice4;
    document.getElementById("end").style.visibility = "visible";


}

function goToNextQuestion(whatTheUserClicked) {
    console.log(whatTheUserClicked);


    var correctText = questions[index].answer;

    if (whatTheUserClicked === correctText) {
        console.log("Correct!");
        score++;
        document.getElementById("cf").textContent = "youer choise correct";
    }
    else {
        console.log("Sorry, that is not correct.");
        secondsLeft -= 15;
        document.getElementById("cf").textContent = "youer choise incorrect"
    }
    index++;
    if (secondsLeft === 0 || index > 4) {


        finish();
    } else {

        getNewQuestion(index);
    }




}
function setTime() {

    var downloadTimer = setInterval(function () {
        document.getElementById("timer").innerHTML = secondsLeft + " seconds remaining";
        secondsLeft -= 1;
        if (secondsLeft === 0) {
            clearInterval(downloadTimer);
            finish();
        }
    }, 1000);
}

endExam.addEventListener("click", function () {

    finish();



});
//   function answerClickSetUp() {
var a = document.getElementById("answer1");
var b = document.getElementById("answer2");
var c = document.getElementById("answer3");
var d = document.getElementById("answer4");

a.addEventListener("click", function () { goToNextQuestion(a.innerHTML); });
b.addEventListener("click", function () { goToNextQuestion(b.innerHTML); });
c.addEventListener("click", function () { goToNextQuestion(c.innerHTML); });
d.addEventListener("click", function () { goToNextQuestion(d.innerHTML); });
//   }
//   answerClickSetUp();
function finish() {
    document.getElementById("end").style.visibility = "hidden";
    document.getElementById("quiz").style.visibility = "hidden";
    document.getElementById("timer").style.visibility = "hidden";
    document.getElementById("save").style.visibility = "visible";
    document.getElementById("input").style.visibility = "visible";

    console.log(results);
    results.style.visibility = "none";
    
    save.addEventListener("click",function(){
        
        var yourName =  input.value ;
        document.getElementById("save").style.visibility = "hidden";
        document.getElementById("show").style.visibility = "visible";
        document.getElementById("retake").style.visibility = "visible";
        document.getElementById("clear").style.visibility = "visible";
        localStorage.setItem("yourName", yourName);
        localStorage.setItem("score", score);
        
    })
    
    
    show.addEventListener("click",function(){
        document.getElementById("save").style.visibility = "hidden";
        
        var name = localStorage.getItem("yourName");
        var score1 = localStorage.getItem("score");
        document.getElementById("name").textContent = "your Name:" + "" + name;
        results.textContent = "your score is:" + "" + score1;
        console.log(name,score1);
        
        
    })
    retake.addEventListener("click",function(){
        
        location.reload();
        
        
        
        
    })
    clear.addEventListener("click",function(){
        document.getElementById("input").value = "";
        localStorage.clear();
        document.getElementById("name").textContent = "your Name:" + "" ;
        results.textContent =  "your score is:" + "" ;

    })
    
    
}









































/*
  on page load:
    show game start screen
    include how to play instructions
    add start quiz button

  on start button click:
    hide game-start div
    show questions div
    show question
    start timer
  on answer selection:
    check to see if answer is correct
    if correct:
      display success message
      add to score
      show next question
    if incorrect:
      display fail message
      deduct time from timer
      show next question
  for game end:
    if all the questions have been answered:
      display score
      prompt to save initials and results
      on save:
        record results in local storage
    if time runs out:
      display score
      prompt to try again
*/
/*
  functions:
    startGame()
    resetGame()
    endGame()
    restartGame()
    startTimer()
    decrementTimer()
    renderQuestion()
    checkAnswer()
    saveScore()
    clearScores()
    toggleScores()
*/




