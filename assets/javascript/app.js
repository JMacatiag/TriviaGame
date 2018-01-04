var correctAnswers=0;
var incorrectAnswers=0;
var unanswered=0;
var questionDisplay=0;
var audio;
var questionTimer=30;
// var counter=setInterval(1000);

var questionOne={
	question: "Which family was warden of the North during the reign of King Robert Baratheon?",
	responseOne: "House Stark",
	responseTwo: "House Karstark",
	responseThree: "House Mormont",
	responseFour: "House Reed",
	answer: "House Stark",
};

var questionTwo={
	question: "House Swyft holds which keep?",
	responseOne: "Banefort",
	responseTwo: "Ashemart",
	responseThree: "Cornfield",
	responseFour: "Castamere",
	answer: "Cornfield",
};

var questionThree={
	question: "Which one of the following weapons is not Valyrian steel?",
	responseOne: "Red Rain",
	responseTwo: "Daybreak",
	responseThree: "Lady Forlorn",
	responseFour: "Nightfall",
	answer: "Daybreak",
};

var questionFour={
	question: "Which of the following is not one of Daenerys Targaryen's dragons:",
	responseOne: "Drogon",
	responseTwo: "Dracarys",
	responseThree: "Viserion",
	responseFour: "Rhaegal",
	answer: "Dracarys",
};

var questionFive={
	question: "The house words for House Hornwood are:",
	responseOne: "We Do No Sow",
	responseTwo: "Unfliching",
	responseThree: "When All us Darkest",
	responseFour: "Righteous in Wrath",
	answer: "Righteous in Wrath",
};

var questionSix={
	question: "Who teaches Arya the ways of the Faceless men?",
	responseOne: "Waif",
	responseTwo: "Jaqen H'ghar",
	responseThree: " No one",
	responseFour: "Many Faced God",
	answer: "No one",
};

var questionSeven={
	question: "When did Rhaegar Targaryen die?",
	responseOne: "Battle of the Trident",
	responseTwo: "Sack of King's Landing",
	responseThree: "Siege of Storm's End",
	responseFour: "Tower of Joy",
	answer: "Battle of the Trident",
};

var questionEight={
	question: "Who of the followig was not invoved in the Conquest?",
	responseOne: "Visenya Targaryen",
	responseTwo: "Rhaenys Targaryen",
	responseThree: "Aegon Targaryen",
	responseFour: "Rhaenyra Targaryen",
	answer: "Rhaenyra Targaryen",
};

var questionNine={
	question: "Who is the rightful heir to the thrones following the death of King Robert Baratheon?",
	responseOne: "John Snow",
	responseTwo: "Daenerys Targaryen",
	responseThree: "Stannis Baratheon",
	responseFour: "Renly Baratheon",
	answer: "Stannis Baratheon",
};

var questionArray=[questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine];



// on hover change background of possible answer
$(".answer").hover(function(){
$(this).css("background-color", "grey");
}, function(){
$(this).css("background-color", "black");
});

// correct answer function
function correctResponse(){
	correctAnswers++;
}

// incorrect answer function
function incorrectResponse(){
	incorrectAnswers++;
}

// no answer given
function noResponse(){
	unanswered++;
}

// // timer function
// function timer(){
// 	questionTimer--;
	
// }

function startTimer() {

    var countdownTimer = setInterval(function() {

        console.log(questionTimer);
        questionTimer = questionTimer - 1;

        if (questionTimer <= 0) {
            clearInterval(questionTimer);
        }

    }, 1000);
    console.log(questionTimer);
    $("#countdown").html(questionTimer);

}

// function to run the game
function nextQuestion() {
	$(".triviaQuestion").html(questionArray[questionDisplay].question);

	$("#answerOne").html(questionArray[questionDisplay].responseOne);

	$("#answerTwo").html(questionArray[questionDisplay].responseTwo);

	$("#answerThree").html(questionArray[questionDisplay].responseThree);

	$("#answerFour").html(questionArray[questionDisplay].responseFour);

	$("#countdown").html(questionTimer);
}

var x = document.getElementById("myAudio"); 
function playAudio() { 
    x.play(); 
} 
function pauseAudio() { 
    x.pause(); 
} 

audio = $("audio");
audio.loop = true;

$("#startButton").on("click", function(){
	nextQuestion();
	 playAudio();
	 x.loop = true;
	$(this).hide();
	startTimer();
})

$(".answer").on("click", function(){
		var userChoice=$(this).html();
		console.log(userChoice);


		if (questionTimer===0){
			unanswered++;
			questionDisplay++;
			nextQuestion();
			questionTimer=30;
		}
		if (userChoice===questionArray[questionDisplay].answer){
			correctAnswers++;
			questionDisplay++;
			nextQuestion();
			console.log(correctAnswers);
			console.log(incorrectAnswers);
			questionTimer=30;
		}
		if (userChoice!==questionArray[questionDisplay].answer){
			incorrectAnswers++;
			questionDisplay++;
			nextQuestion();
			console.log(correctAnswers);
			console.log(incorrectAnswers);
			questionTimer=30;
		}
		if (correctAnswers+incorrectAnswers===9){

		}
})
