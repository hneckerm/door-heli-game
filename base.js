// alert("hi hello")

var doors = {1: "goat", 2: "bicycle", 3: "car"};

$(document).ready(function() {

$("#gameTime2").hide();
$("#door1").hide();
$("#door2").hide();
$("#door3").hide();
$("#gameTime1").click(function(){
	var readyPlay = prompt("are you ready? any answer will do.");
if (readyPlay != null) {
	document.getElementById("message").innerHTML = "click below to continue.";
    }
    $("#gameTime1").hide();
    $("#gameTime2").show();
  });

$("#gameTime2").click(function(){
	$("#door1").show();
	$("#door2").show();
	$("#door3").show();
	var gameStart = prompt("look at the doors below. which one do you think contains a goat?", " numeric value, please");
	if (gameStart == 1) {
	document.getElementById("message").innerHTML = "awesome!! you got the " + doors[1] + ". try again if you'd like!";
	console.log(doors[1]);
} else if (gameStart == 2 ) {
	document.getElementById("message").innerHTML = "bummer... looks like it's just a " + doors[2] + " try again!" ;
	console.log(doors[2]);
} else if (gameStart == 3) {
	document.getElementById("message").innerHTML = "too bad... just a " + doors[3] + " try again!";
	console.log(doors[3]);
}

});

	$("#door1").click(function(){
			document.getElementById("message").innerHTML = "awesome!! you got the " + doors[1] + ". try again if you'd like!";
})
	$("#door2").click(function(){
			document.getElementById("message").innerHTML = "bummer.. just a " + doors[2] + ". try again!";
})
	$("#door3").click(function(){
			document.getElementById("message").innerHTML = "bummer.. just a " + doors[3] + ". try again!";
})


});
  
