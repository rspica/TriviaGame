// user experience
// ====================================================
// player hits start and is presented with one multiple choice trivia question.
// player answers the question in a fixed amount of time.
// player can only choose one answer.
// once the question is answered games moves to the next question.
// if time is up the game diplays time is up and move to the next question.
// score is kept for correct and incorrect answers, and is displayed at the end of each round.
//

// code requirements
// ====================================================
// display game rules with a button that has an on.click event to the 
// on.click initiate game, removed instruction.
// gameInit () { display timer that counts down from XXsec, display question and multi-choice answer key via single selection option (radio button)}
// Build timing function for Q&A countdown called on gameInit, var myVar = setInterval(function(){ myTimer() }, 1000); 
// Fire timer on page load for each question cycle
// Build question object to hold { question : questionValue, answer : answerValue, fauxAnswer : fauxAnswerValue}
// create random question generator Math.floor(Math.random() * (max - min + 1)) + min; to randomly select one object question to display during game play
// display question block (question and 4-5 possible answers)
// Create an on.click event to listen for player answer selection
// check answer condition if (radioSelect === answerValue) { correctAnswer++ and screen display “CORRECT”} else if ((radioSelect !== answerValue) {wrongAnswer++ and screen display “SO CLOSE”
// check player radio input for answer selection to be made check === true, else check === false alert “make selection” 
// if time-up alert 'time is up!'
// store and total all correct answers
// store and total all incorrect answers
// store and total all no answers
// display game answer totals (correct, incorrect, unanswered) and reset game. prompt player to try again




// generate one random question with 4-5 answers to choose from per page.
// create and display countdown clock for each question
// check to see if answer === correct, alert correct and move to next question 
// check to see if answer is != correct, alert incorrect and move to next question
// check to see if question has been answered.


// code bonus
// =================================================
// add sound on countdown clock 'tic', on correct and incorrect answers
// color change background on mouse over event
// bounce or shake something on the page


//---------------------------------------------------
//-------------  ** Global Variables ** -------------
//---------------------------------------------------


// player corrected questions count variable
var winCounter = 0;

// player miss questions count variable
var lossCounter = 0;

// player non answered questions count variable
var answerCounter = 0;

// clock varaables minutes = total time 
var minutes = 2;
var secondsRemaining;
var intervalHandle;



// var questionBank = {
// 	question : "question one",
// 	answer : "correct answer one",
// 	pseudoQuestion : ["pQuest1", "pQuest2", "pQuest3", "pQuest4", "pQuest5"]
// };


//-------------------------------------------------------
//----------------  **Audio Elements**  ------------------
//-------------------------------------------------------
var introAudio = new Audio('./assets/sound/LetsGetPhysical.mp3');
var startAudio = new Audio('./assets/sound/NFF-switch-on.mp3');
var countdownAudio = new Audio('./assets/sound/Fire Alarm.mp3');


$(document).ready(function() {
    //   introAudio.play(introAudio);
    introAudio.addEventListener('ended', function() { // loops intro theme music
        this.currentTime = 0;
        this.play();
    }, false);
    //   introAudio.play();


    function gameInit() {
        $('#intro').remove();
        introAudio.pause(introAudio);
        tickTock();
    }

    // Start button: initializes game start
    $('#pulse').on('click', function() {
        startAudio.play(startAudio);
        startCount();
    });

    function startCount() {
        $('.start').append("Go!");
        var timeoutId = setTimeout(function() {
            $('.start').remove();
            gameInit();
        }, 1000);
    }

    //game countdown clock
    secondsRemaining = minutes * 60;
    intervalId = setInterval(tickTock, 1000)

    function tickTock() {
        var clockFace = $('#clockFace');
console.log('in clock')
        var min = Math.floor(secondsRemaining / 60);
        var sec = secondsRemaining - (min * 60);
        if (sec < 10) {
            sec = "0" + sec;
        }
        if (min < 10) {
        	min = "0" + min;
        }

        var time = min + ":" + sec
        $('#clockFace').html(time);
console.log('in clock pushing')
        if (secondsRemaining === 0) {
        $('#clockFace').append("Yo time is up!");
            clearInterval(intervalId);
            //        nextQuestion();
        }

        secondsRemaining--;
    }

Function radioAnswer {
	var answer;
	var length = $('.questionAnswer.answer').length;

	for (i = 0; i < length; i++) {
		var answer = $('.questionAnswer.answer')[i];
            crystalValueAdd.setAttribute("Data-answer", randomNum);
            crystalValue.push(randomNum);
	     AnswerList(this.getAttribute("data-crystal"));


	for (i = 0; i < length; i++) {
		if ($('.questionAnswer.answer')[i].check) {
			answer = $('.questionAnswer.answer')[i] 
		}
	}
		if ($('.questionAnswer.answer')[i].value);
		break

}


}); //.ready closing brace
