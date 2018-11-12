function openForm() {
  console.log("hello nooms");
  document.getElementById("myForm").style.display = "block";
  console.log("breakfast");
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function sendEmail() {
  if (document.getElementById("attitude").value != "kak")
  {
    document.getElementById("successMessage").style.visibility = "visible";
  }
  else
  {
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