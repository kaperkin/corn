var weapons = ["farmer", "hoe", "weeds"];

var player1 = prompt("The rules are simple: choose " + weapons + " !").toLowerCase();

var randomNum = function(){ 
	var randomNum = Math.floor ( Math.random() * 3);
	return randomNum;
	};
	
var computerChoice = weapons[randomNum()];

playerChoice = ("You chose " + player1 + "!");

compChoice = ("The computer chose " + computerChoice + "!");


if(player1 === computerChoice){
	result = ("It's a tie! Everyone's a winner...or a loser depending on how you look at it.");
}
else if (player1 === "farmer" && computerChoice === "weeds"){
	result = ("The farmer kills the weeds! Your corn is safe! You win! Hurrah!");
}
else if (player1 === "hoe" && computerChoice === "farmer"){
	result = ("The hoe gives the farmer a sliver! You win! Hurrah!");
}
else if (player1 === "weeds" && computerChoice === "hoe"){
	result = ("The weeds strangle the corn despite the valient effort by the hoe! You win! Hurrah!");
}
else {
	result = ("You lose! The machine wins this time.");
};

document.getElementById('playerChoice').innerHTML=playerChoice;
document.getElementById('compChoice').innerHTML=compChoice;
document.getElementById('result').innerHTML = result;

