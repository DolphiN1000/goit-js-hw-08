import throttle from 'lodash.throttle';

const EMAIL_MESSAGE_KEY = 'feedback-form-text';


const refs = {
  inputForm: document.querySelector('.feedback-form'),
};


function onInput(event) {
  event.preventDefault();
  const email = refs.inputForm.elements.email.value;
  const message = refs.inputForm.elements.message.value;
  localStorage.setItem(EMAIL_MESSAGE_KEY, JSON.stringify({ message, email }));
}

function toOutput(event) {
  event.preventDefault();
  const outputText = localStorage.getItem(EMAIL_MESSAGE_KEY);
  const outputObject = JSON.parse(outputText) || { email: '', message: '' };
  const { email, message } = outputObject;
  refs.inputForm.elements.email.value = email;
  refs.inputForm.elements.message.value = message;
}

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '') {
    return alert("Input 'email' !!!");
  }
  if (message.value === '') {
    return alert("Input 'message' !!!");
  }
  console.log({ email: email.value, message: message.value });
  localStorage.clear();
  refs.inputForm.reset();
}

refs.inputForm.addEventListener('input', throttle(onInput), 500);
refs.inputForm.addEventListener('submit', onSubmit);
window.addEventListener('load', toOutput);
