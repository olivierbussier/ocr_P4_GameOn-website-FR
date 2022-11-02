
// btnSignup is the button on main page to enter signup modal
const btnSignup = document.querySelectorAll(".btn-signup");
// modalBg is the modal box DIV on which we apply opacity
const modalBg = document.querySelector(".bground.input");
// closeModal is the button (cross) to close modal box
const closeModal = document.querySelector(".close-modal");

// modalCnf is the confirmation (thanks) modal box DIV on which we apply opacity
const confirmBg = document.querySelector(".bground.cnf");
// closeModal is the button (fermer) to close modal box
const closeModalConfirm = document.querySelector(".modal-btn.cnf");
// closeModal is the button (cross) to close modal box
const closeCrossModal = document.querySelector(".close-cnf");

// launch modal form
const funcLaunchModal = () => {
    modalBg.style.display = "block";
    // modalBg.style.opacity = "1";
}

  // Close modal form
const funcCloseModal = (e) => {
    modalBg.style.display = "none";
    // modalBg.style.opacity = "0";
}

// launch confirm form
const funcLaunchModalConfirm = () => {
    confirmBg.style.display = "block";
    // modalBg.style.opacity = "1";
}

  // Close modal form
const funcCloseModalConfirm = (e) => {
    confirmBg.style.display = "none";
    // modalBg.style.opacity = "0";
}

export const initModal = () => {
    // launch modal event
    btnSignup.forEach((field) => field.addEventListener("click", funcLaunchModal))
    closeModal.addEventListener("click", funcCloseModal)
}

export const initConfirm = () => {
    // launch modal event
    funcCloseModal()
    funcLaunchModalConfirm()
    //btnSignup.addEventListener("click", funcLaunchModalConfirm)
    closeModalConfirm.addEventListener("click", funcCloseModalConfirm)
    closeCrossModal.addEventListener(  "click", funcCloseModalConfirm)

    // Reset entries for next inputs
    const inp = document.querySelectorAll(".modal-body input");
    inp.forEach((elem) => {
        const name = elem.attributes.name.value
        if (name === 'location')
            elem.checked = false
        else if (name === 'cond')
            elem.checked = false
        else if (name === 'prevenu')
            elem.checked = true
        else if (name !== 'go')
            elem.value = ''
    })
    document.getElementById('checkbox2').checked = true
}