
import { checkText     } from "./check-text.js"
import { checkEmail    } from "./check-email.js"
import { checkDate     } from "./check-date.js"
import { checkQuantity } from "./check-quantity.js"
import { checkLocation } from "./check-location.js"
import { checkCond     } from "./check-cond.js"

/* -------------------------------------------
* Check if user entries are correct
*/
const checkInputs = (e) => {

    let validationFailed = false
    let a

    e.preventDefault();

    const inputs = document.querySelectorAll(".modal-body input");

    inputs.forEach (input => {
        switch (input.getAttribute('name')) {
            case 'first':
            case 'last':
                a = checkText(input)
                break;
            case 'email':
                a = checkEmail(input)
                break
            case 'birthdate':
                a = checkDate(input)
                break
            case 'quantity':
                a = checkQuantity(input)
                break
            case 'location':
                a = checkLocation(input)
                break
            case 'cond':
                a = checkCond(input)
                break
            default:
                a.result = true
                break
        }
        const formData = input.parentElement;
        if (a.result == true) {
            // Field constraints are fullfilled
            // Clear eventually previous error message
            formData.setAttribute("data-error", "")
            formData.setAttribute("data-error-visible", false)
        } else {
            validationFailed = true
            // Get previous formData class in order to fill
            // error-msg attached to it

            // Select :after pseudo class and then message zone
            formData.setAttribute("data-error", a.message)
            formData.setAttribute("data-error-visible", true)

        }
        if (!validationFailed) {
            // In this cas, display a confirmation box as specified
            // in Figma templates

            // Send form event using fetch API

            // And then, display confirmation box using opacity
            const formBody = document.querySelector('.modal-body')
        }
    })
}

export const initFormDataController = () => {

    // Setup a trigger for submit button in modal box

    const form = document.getElementById("submit-action");
    form.addEventListener('click', e => checkInputs(e))
}