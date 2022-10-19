/** ---------------------------------------------------
 * Check of number & constraints validity
 *  - check if required attribute is present
 *  - test field among min & max numbers if present
 */
 export const checkLocation = (field = null) => {

    // Get name of radiobutton
    const radioName = field.getAttribute('name')

    const valeur = document.querySelector('input[name="' + radioName + '"]:checked')

    // Check of field constraints

    if (valeur == null) {
        // If field constraints are fullfiled
        return {result: false, message: "Veuillez selectionner un tournoi"};
    } else {
        // If field constraints are fullfiled
        return {result: true, message: ""};
    }
    return {status: false, message: "Champ inexistant"}
}
