import throttle from "lodash.throttle";
const feadBackForm = document.querySelector('.feedback-form');
console.log(feadBackForm)


feadBackForm.addEventListener("input", handleInput);
let EMAIL_KEY;
let MESSAGE_KEY;
function handleInput (event) {
    event.preventDefault();
    const {
        elements: { email, message } = event.currentTarget;
        If (email.value === localStorage.getItem(EMAIL_KEY) {

        }
    }
}