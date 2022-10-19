/* -------------------------------------------
* Check text entry fills constraints
 * function gets constraints fromattributes :
 *  - check if required attribute is present
 *  - test field among minlength & maxlength if present
*/
export const checkText = (field = null) => {

    if (field) {
        // Get attributes
        const minL = field.getAttribute('minlength'); const minLength = (minL === null ? 0 : parseInt(minL))
        const maxL = field.getAttribute('maxlength'); const maxLength = (maxL === null ? 9999999 : parseInt(maxL))
        const req  = field.getAttribute('required'); const required = (req === null ? false : true)

        // Check of field constraints
        const textLength = field.value.length;

        if (!required && textLength === 0) {
            // Return ok if the field is not required
            // and strlen == 0
            return {result: true, message: ""}
        }
        if (textLength >= minLength && textLength <= maxLength) {
            // If field constraints are fullfiled
            return {result: true, message: ""};
        }
        if (textLength < minLength) {
            return {result: false, message: "Votre saisie est trop courte, il faut au moins " + minLength + " caractères"}
        }
        if (textLength > maxLength) {
            return {result: false, message: "Votre saisie est trop longue, il faut au maximum " + maxLength + " caractères"}
        }
        return {result: false, message: "Erreur non prévue"}
    }
    return {status: false, message: "Champ inexistant"}
}
