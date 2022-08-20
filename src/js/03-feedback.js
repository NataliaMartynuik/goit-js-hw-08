import throttle from "lodash.throttle";


const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
}

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    event.currentTarget.reset(); 
    localStorage.removeItem(STORAGE_KEY);

} 


function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function populateForm() {
    const savedInputJson = localStorage.getItem(STORAGE_KEY);
    const savedInput = JSON.parse(savedInputJson);
    if (savedInput) {
        refs.email.value = savedInput.email;
        refs.textarea.value = savedInput.message;
    }
}

populateForm();