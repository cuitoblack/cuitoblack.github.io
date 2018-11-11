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