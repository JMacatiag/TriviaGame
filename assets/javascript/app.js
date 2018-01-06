var correctAnswers=0;
var incorrectAnswers=0;
var unanswered=0;
var userChoice="";
var questionDisplay=0;
var audio;
var questionTimer=15;
var completedQuestions=0;
var responseImage=0;
var showImage;

// Questions
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
	responseThree: "No One",
	responseFour: "Many Faced God",
	answer: "No One",
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

var images=["assets/images/correct.gif","assets/images/incorrect.gif","assets/images/unanswered.gif"]

// on hover change background of possible answer
$(".answer").hover(function(){
$(this).css("background-color", "grey");
}, function(){
$(this).css("background-color", "black");
});

// reset function
function reset(){
	correctAnswers=0;
	incorrectAnswers=0;
	unanswered=0;
	userChoice="";
	questionDisplay=0;
	questionTimer=15;
	completedQuestions=0;
}


// correct answer function
function correctResponse(){
	$("#image-holder").show();
	$(".timeTitle").hide();
	$(".triviaQuestion").hide();
	$("#textAreaOne").show();
	$("#textAreaTwo").show();
	$("#textAreaOne").html("Correct!");
	$("#textAreaTwo").html("Your answer of: "+questionArray[questionDisplay].answer+" was right");
	$("#answerOne").hide();
	$("#answerTwo").hide();
	$("#answerThree").hide();
	$("#answerFour").hide();
	responseImage=0;
	displayImage();
	correctAnswers++;
	questionDisplay++;
	completedQuestions++;
	questionTimer=18;
	setTimeout(nextQuestion,3000);
}

// incorrect answer function
function incorrectResponse(){
	$("#image-holder").show();
	$(".timeTitle").hide();
	$(".triviaQuestion").hide();
	$("#textAreaOne").show();
	$("#textAreaTwo").show();
	$("#textAreaOne").html("Wrong!");
	$("#textAreaTwo").html("The correct answer is "+questionArray[questionDisplay].answer);
	$("#answerOne").hide();
	$("#answerTwo").hide();
	$("#answerThree").hide();
	$("#answerFour").hide();
	responseImage=1;
	displayImage();
	incorrectAnswers++;
	questionDisplay++;
	completedQuestions++;
	questionTimer=18;
	setTimeout(nextQuestion,3000);

}

// no answer given
function noResponse(){
	$("#image-holder").show();
	$(".timeTitle").hide();
	$(".triviaQuestion").hide();
	$("#textAreaOne").show();
	$("#textAreaTwo").show();
	$("#textAreaOne").html("What?! You're too slow");
	$("#textAreaTwo").html("You didn't answer");
	$("#answerOne").hide();
	$("#answerTwo").hide();
	$("#answerThree").hide();
	$("#answerFour").hide();
	responseImage=2;
	displayImage();
	unanswered++;
	questionDisplay++;
	completedQuestions++;
	questionTimer=18;
	setTimeout(nextQuestion,3000);
}

// change source of reaction image
function displayImage() {
  $("#image-holder").html("<img src=" + images[responseImage] + ">");
}

// countdown function
function startTimer() {
    var countdownTimer = setInterval(function() {
        questionTimer = questionTimer - 1;
        if (questionTimer < 0) {
            // clearInterval(questionTimer);
            noResponse();
        }
         $("#timeKeeper").html("Time Remaining: "+questionTimer+" seconds");
    }, 1000);
  

}

// function to run the game
function nextQuestion() {
	$("#image-holder").hide();
	if (completedQuestions<9){
		$(".timeTitle").show();
		$(".triviaQuestion").show();
		$("#answerOne").show();
		$("#answerTwo").show();
		$("#answerThree").show();
		$("#answerFour").show();

		$("#textAreaOne").hide();
		$("#textAreaTwo").hide();
		$("#textAreaThree").hide();

		$(".triviaQuestion").html(questionArray[questionDisplay].question);
		$("#answerOne").html(questionArray[questionDisplay].responseOne);
		$("#answerTwo").html(questionArray[questionDisplay].responseTwo);
		$("#answerThree").html(questionArray[questionDisplay].responseThree);
		$("#answerFour").html(questionArray[questionDisplay].responseFour);
		$("#countdown").html(questionTimer);
		console.log(completedQuestions);
	}

	if (completedQuestions===9){
		endGame();
	}

}

function endGame(){
	$(function () {
     	$('#restart').removeClass('hidden');
	});	
	$("#image-holder").hide();
	$("#answerThree").hide();
	$("#textAreaThree").show();
	$(".triviaQuestion").html("You have complete the Game of Thrones");
	$("#textAreaOne").html("Correct Answers: "+correctAnswers);
	$("#textAreaTwo").html("Incorrect Answers: "+incorrectAnswers);
	$("#textAreaThree").html("Unanswered Questions: "+unanswered);
	setTimeout(reset,500);
}

// to play audio upon starting the game
var x = document.getElementById("myAudio"); 
function playAudio() { 
    x.play(); 
} 
function pauseAudio() { 
    x.pause(); 
} 


// Loops the audio
audio = $("audio");
audio.loop = true;

// Running the games
$("#startButton").on("click", function(){
	startTimer();
	nextQuestion();
	 playAudio();
	 x.loop = true;
	$(this).hide();
	
})

// Running the restart button
$("#restart").on("click", function(){
	questionTimer=15;
	 $("#restart").addClass("hidden");
	nextQuestion();
})

// Gameplay
$(".answer").on("click", function(){
		userChoice=$(this).html();
		console.log(userChoice);


	
		if (userChoice===questionArray[questionDisplay].answer){
			correctResponse();
			return;
		}
		if (userChoice!==questionArray[questionDisplay].answer){
			incorrectResponse();
			return;
		}

		
})




