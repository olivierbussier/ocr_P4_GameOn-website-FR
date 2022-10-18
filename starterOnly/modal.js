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
const closeModal = document.querySelectorAll("#close-modal");

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  // modalbg.style.opacity = "1";
}

// Close modal form
function funcCloseModal (e) {
  modalbg.style.display = "none";
  // modalbg.style.opacity = "0";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

closeModal.forEach((cross) => cross.addEventListener('click', funcCloseModal))

/* -------------------------------------------
 * Check if user entries are correct
*/
const checkInputs = (e) => {

  //e.preventDefault();

  const inputs = document.querySelectorAll(".modal-body input");
  inputs.forEach (input => {
      switch (input.getAttribute('name')) {
        case 'first':
        case 'last':
          default:
          console.log(input)
          textController(null, input, 2)
          break;
      }
  })

}

/* -------------------------------------------
 * Check text entry fills constrints
*/
const textController = (e = null, textField = null, minLength = 2, maxLength = 32) => {

  iText = e ? e.target : textField  // Recherche de l'input a vérifier
  if (!iText.checkValidity()) {
    //iText.setCustomValidity('Au moins 2 caractères')
     iText.reportValidity()
    return false
  }
  return true
}

/* ---------------------------------------------
 * Initialisations après le chargement de la page
*/
window.addEventListener('DOMContentLoaded', (e) => {

    // Setup a trigger for submit button in modal box
    const form = document.getElementById("submit-action");
    //form.addEventListener('click', e => checkInputs(e))

    var result;

    // Setup of fields controllers
/*
    const inputs = document.querySelectorAll(".modal-body input");
    inputs.forEach (input => {
        switch (input.getAttribute('name')) {
          case 'first':
          case 'last':
            input.addEventListener('input', textController)
            break;
        }
    })
*/

})
