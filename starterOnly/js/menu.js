/**
 * Fonction utilisée pour faire apparaitre le menu "hamburger" en mode display mobile
 */
const editNav = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

export const initMenuResponsive = () => {
    // Recherche du bouton de menu
    const button = document.querySelector('.icon')
    button.addEventListener("click", editNav)
}