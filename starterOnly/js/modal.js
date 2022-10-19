
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModal = document.querySelectorAll("#close-modal");

// launch modal form
const funcLaunchModal = () => {

    modalbg.style.display = "block";
    // modalbg.style.opacity = "1";
}

  // Close modal form
const funcCloseModal = (e) => {
    modalbg.style.display = "none";
    // modalbg.style.opacity = "0";
}

export const initModal = () => {

    // launch modal event
    modalBtn.forEach((btn) => btn.addEventListener("click", funcLaunchModal));
    closeModal.forEach((cross) => cross.addEventListener('click', funcCloseModal))
}