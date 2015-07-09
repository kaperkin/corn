var user = [];

var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", addUser);

function init(){

var p = document.getElementById("subscribeClick");
p.onclick = showForm;

}

function showForm(){
	var f = document.getElementById("subscribeForm");
	f.style.display = "block";
	f.style.position = "absolute";
	
	}


	
function addUser(){
	var f = document.getElementById("subscribeForm");
	f.style.display = "none";
	var name = document.getElementById("name").value;
	var story = document.getElementById("cornStory").value;
	user.push(name + "'s favourite corn story is: " + story);
	formatStory();
	}
 
 function formatStory(){
	 text = document.getElementById("myShoutOut");
	 text.innerHTML = user;
	 //for each item in the array
		// add a <p> with the item to this div
	 }
 

