function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
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
  var subject = "Testing";
  var body = "More of the same";

  if (document.getElementById("attitude").value != "kak")
  {
    window.open('mailto:cuito@blackmajor.co.za?subject=subject&body=body');
    document.getElementById("kakMessage").style.visibility = "hidden";
    document.getElementById("successMessage").style.visibility = "visible";
  }
  else
  {
    document.getElementById("successMessage").style.visibility = "hidden";
    document.getElementById("kakMessage").style.visibility = "visible";
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