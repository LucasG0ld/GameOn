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
const btnThanks =  document.getElementById("btn-thanks");
let gameThanks = document.getElementById('game-thanks');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.classList.add("dp-block");
  modalbg.classList.remove("dp-none");
}

// close modal form on the cross
function closeModal() {
  modalbg.classList.add("dp-none");
  modalbg.classList.remove("dp-block");
}

// close thanks modal on the button
btnThanks.addEventListener("click", function closeThanks() {
  gameThanks.classList.add("dp-none");
  gameThanks.classList.remove("dp-block");
});

// close modal form on the cross
function closeThanks() {
  gameThanks.classList.add("dp-none");
  gameThanks.classList.remove("dp-block");
}


// Validation form
document.getElementById("gameForm").addEventListener("submit", function validateForm(e) {
  let gameForm = document.getElementById('gameForm');
  let formBground = document.getElementById('formBground');
  let firstName = document.getElementById('first').value;
  let textFirst = document.getElementById('text-first');
  let lastName = document.getElementById('last').value;
  let textLast = document.getElementById('text-last');
  let email = document.getElementById('email').value;
  let textEmail = document.getElementById('text-email');
  let birthDate = document.getElementById('birthdate').value;
  let textBirth = document.getElementById('text-birth');
  let tournamentQtt = document.getElementById('quantity').value;
  let textQtt = document.getElementById('text-qtt');
  let location1 = document.getElementById('location1');
  let location2 = document.getElementById('location2');
  let location3 = document.getElementById('location3');
  let location4 = document.getElementById('location4');
  let location5 = document.getElementById('location5');
  let location6 = document.getElementById('location6');
  let textLocation = document.getElementById('text-location');
  let condition = document.getElementById('checkbox1');
  let textCondition = document.getElementById('text-condition');
  
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let regexName = /^[a-zA-Z ]{2,30}$/

  e.preventDefault();

  if (firstName.length <= 2 || !firstName.match(regexName)) {
    textFirst.classList.add("dp-block");
    textFirst.classList.remove("dp-none");
    e.preventDefault();
    return false;
  } else {
    textFirst.classList.add("dp-none");
  }
  if (lastName.length <= 2 || !lastName.match(regexName)) {
    textLast.classList.add("dp-block");
    textLast.classList.remove("dp-none");
    e.preventDefault();
    return false;
  } else {
    textLast.classList.add("dp-none");
  }
  if (email == "" || !email.match(regexEmail)) {
    textEmail.classList.add("dp-block");
    textEmail.classList.remove("dp-none");
    e.preventDefault();
    return false;
  } else {
    textEmail.classList.add("dp-none");
  }
  if (birthDate == "") {
    textBirth.classList.add("dp-block");
    textBirth.classList.remove("dp-none");
    e.preventDefault();
    return false;
  } else {
    textBirth.classList.add("dp-none");
  }
  if (tournamentQtt == "") {
    textQtt.classList.add("dp-block");
    textQtt.classList.remove("dp-none");
    e.preventDefault();
    return false;
  } else {
    textQtt.classList.add("dp-none");
  }
  if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
    textLocation.classList.add("dp-block");
    textLocation.classList.remove("dp-none");
    e.preventDefault();
    return false;
  } else {
    textLocation.classList.add("dp-none");
  }
  if (!condition.checked) {
    textCondition.classList.add("dp-block");
    textCondition.classList.remove("dp-none");
    e.preventDefault();
    return false;
  } else {
    textCondition.classList.add("dp-none");
  }
  if (gameForm.submit) {
    gameThanks.classList.add("dp-block");
    gameThanks.classList.remove("dp-none");
    formBground.classList.remove("dp-block");
    formBground.classList.add("dp-none");
    e.preventDefault();
    return false;
    
  }
});