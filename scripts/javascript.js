function openForm() {
  console.log("hello nooms");
  document.getElementById("myForm").style.display = "block";
  console.log("breakfast");
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function sendEmail() {
  document.getElementById("successMessage").style.visibility = "visible";
}

function chooseKak() {
  document.getElementById("lekker").style.background-color = "white";
  document.getElementById("kaklekker").style.background-color = "white";
  document.getElementById("kak").style.background-color = "black";
}

function chooseLekker() {
  document.getElementById("kak").style.background-color = "white";
  document.getElementById("kaklekker").style.background-color = "white";
  document.getElementById("lekker").style.background-color = "black";
}

function chooseKakLekker() {
  document.getElementById("lekker").style.background-color = "white";
  document.getElementById("kak").style.background-color = "white";
  document.getElementById("kaklekker").style.background-color = "black";
}