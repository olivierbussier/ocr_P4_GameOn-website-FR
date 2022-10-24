/** ---------------------------------------------------
 * Check of number & constraints validity
 *  - check if required attribute is present
 *  - test field among min & max numbers if present
 */
 export const checkCond = (field) => {

    // Get name of radiobutton
    const checkName = field.getAttribute('name')
    const valeur = document.querySelector('input[name="' + checkName + '"]:checked')

    // Check of field constraints
    if (valeur === null) {
        // If field constraints are fullfiled
        return {result: false, message: "Veuillez accepter les conditions générales"}
    } else {
        // If field constraints are fullfiled
        return {result: true, message: ""};
    }
}
