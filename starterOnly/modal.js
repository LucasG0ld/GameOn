function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const formClose = document.querySelectorAll(".close");
const firstName = document.getElementById('first').value;
const lastName = document.getElementById('last').value;
const email = document.getElementById('email').value;
const birthDate = document.getElementById('birthdate').value;
const tournamentQuantity = document.getElementById('quantity').value;
const location1 = document.getElementById('location1').value;
const location2 = document.getElementById('location2').value;
const location3 = document.getElementById('location3').value;
const location4 = document.getElementById('location4').value;
const location5 = document.getElementById('location5').value;
const location6 = document.getElementById('location6').value;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form on the cross
function closeModal() {
  modalbg.style.display = "none";
}


