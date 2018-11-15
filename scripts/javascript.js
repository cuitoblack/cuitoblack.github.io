function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openTheBoringStuff() {
  document.getElementById("teesAndCees").style.display = "block";
  document.getElementById("teesAndCees").style.zIndex = "4";
}

function closeTheBoringStuff() {
  document.getElementById("teesAndCees").style.display = "none";
}

var counter = 1;
function swopScreens() {
  counter++;
  if (counter % 2 == 0){
	document.getElementById("toTheRight").style.zIndex = "1";
	document.getElementById("toTheLeft").style.zIndex = "2";
  }else{
	document.getElementById("toTheLeft").style.zIndex = "1";
	document.getElementById("toTheRight").style.zIndex = "2";
  }
}

function swopToRight() {
  if (document.getElementById("toTheRight").style.zIndex == "2"){
	console.log("inside1");
	document.getElementById("toTheRight").style.zIndex = "1";
	document.getElementById("toTheLeft").style.zIndex = "2";
	console.log("inside2");
  }else{
	console.log(document.getElementById("toTheRight").style.zIndex);
	document.getElementById("toTheLeft").style.zIndex = "1";
	document.getElementById("toTheRight").style.zIndex = "2";
	console.log("inside4");
  }
}

function sendEmail() {
  Email.send("cuito@blackmajor.co.za",
	"cuitonaude@gmail.com",
	"This is a subject",
	"this is the body",
	"smtp.gmail.com",
	"cuitonaude@gmail.com",
	"chocolate69");

  if (document.getElementById("email").value == "")
  {
	document.getElementById("kakMessage").style.visibility = "hidden";
	document.getElementById("successMessage").style.visibility = "hidden";
    	document.getElementById("emailMessage").style.visibility = "visible";
  }
  else
  {
  	if (document.getElementById("attitude").value != "kak")
  	{
		document.getElementById("emailMessage").style.visibility = "hidden";
    	  	document.getElementById("kakMessage").style.visibility = "hidden";
    	  	document.getElementById("successMessage").style.visibility = "visible";
  	}
  	else
  	{
		document.getElementById("emailMessage").style.visibility = "hidden";
    		document.getElementById("successMessage").style.visibility = "hidden";
    		document.getElementById("kakMessage").style.visibility = "visible";
  	}
  }
}

function chooseKak() {
  document.getElementById("attitude").value = "kak";
  document.getElementById("lekker").style.backgroundColor = "white";
  document.getElementById("kaklekker").style.backgroundColor = "white";
  document.getElementById("kak").style.backgroundColor = "black";
}

function chooseLekker() {
  document.getElementById("attitude").value = "lekker";
  document.getElementById("kak").style.backgroundColor = "white";
  document.getElementById("kaklekker").style.backgroundColor = "white";
  document.getElementById("lekker").style.backgroundColor = "black";
}

function chooseKakLekker() {
  document.getElementById("attitude").value = "kaklekker";
  document.getElementById("lekker").style.backgroundColor = "white";
  document.getElementById("kak").style.backgroundColor = "white";
  document.getElementById("kaklekker").style.backgroundColor = "black";
}