$(document).ready(function(){


var answers = ["It is certain",
			"It is decidedly so",
			"Without a doubt",
			"Yes, definitely",
			"You may rely on it",
			"As I see it, yes",
			"Most likely",
			"Outlook good",
			"Yes",
			"Signs point to yes",
			"Reply hazy try again",
			"Ask again later",
			"Better not tell you now",
			"Cannot predict now",
			"Concentrate and ask again",
			"Don't count on it",
			"My reply is no",
			"My sources say no",
			"Outlook not so good",
			"Very doubtful",
			"If you haven't had any in awhile",
			"Not with a ten foot pole",
			"If you have access to antibiotics"];

		var input = document.getElementById("#input").value;


function eightball(){



var random = math.floor((random()* answers.length));

$("#answerspace").html("<p>" + answers[random] + "</p>");
$("#question").html("<p>"+ input + "</p>");


};







});