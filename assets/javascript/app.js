var correctAnswers=0;
var incorrectAnswers=0;
var unanswered=0;
var questionArray = [1,2,3,4,5,6,7,8,9];
var questionTimer=30;

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
	resonseThree: "When All us Darkest",
	responseFour: "Righteous in Wrath",
	answer: "Righteous in Wrath",
};

var questionSix={
	question: "Who teaches Arya the ways of the Faceless men?",
	responseOne: "Waif",
	responseTwo: "Jaqen H'ghar",
	resonseThree: " No one",
	responseFour: "Many Faced God",
	answer: "No one",
};

var questionSeven={
	question: "When did Rhaegar Targaryen die?",
	responseOne: "Battle of the Trident",
	responseTwo: "Sack of King's Landing",
	resonseThree: "Siege of Storm's End",
	responseFour: "Tower of Joy",
	answer: "Battle of the Trident",
};

var questionEight={
	question: "Who of the followig was not invoved in the Conquest?",
	responseOne: "Visenya Targaryen",
	responseTwo: "Rhaenys Targaryen",
	resonseThree: "Aegon Targaryen",
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


// on hover change background of possible answer
$(".answer").hover(function(){
$(this).css("background-color", "grey");
}, function(){
$(this).css("background-color", "black");
});

// correct answer function
function correct(){
	correctAnswers++;
}

