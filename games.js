var weapons = ["farmer", " hoe", " weeds"];

var player1 = prompt("The rules are simple: choose " + weapons + " !").toLowerCase();

var randomNum = function(){ 
	var randomNum = Math.floor ( Math.random() * 3);
	return randomNum;
	};
	
var computerChoice = weapons[randomNum()];

document.write("You chose " + player1 + "!");
document.write("<br>")
document.write("The computer chose " + computerChoice + "!");
document.write("<br>")

if(player1 === computerChoice){
	document.write("It's a tie! Everyone's a winner...or a loser depending on how you look at it.");
}
else if (player1 === "farmer" && computerChoice === "weeds"){
	document.write("The farmer kills the weeds! Your corn is safe! You win! Hurrah!");
}
else if (player1 === "hoe" && computerChoice === "farmer"){
	document.write("The hoe gives the farmer a sliver! You win! Hurrah!");
}
else if (player1 === "weeds" && computerChoice === "hoe"){
	document.write ("The weeds strangle the corn despite the valient effort by the hoe! You win! Hurrah!");
}
else {
	document.write ("You lose! The machine wins this time.");
};


