const userDataForm = document.querySelector("#userData");
const fNameField = document.querySelector("#fName");
const lNameField = document.querySelector("#lName");
const emailField = document.querySelector("#email");
const emailFieldLabel = document.querySelector("#emailLabel");
const subCheckField = document.querySelector("#checkbox");
const commentsField = document.querySelector("#comments");
const submitButton = document.querySelector("#submit");

// Disable submit button by default
submitButton.disabled = true;

// Hide input for email initially
emailField.hidden = true;
emailFieldLabel.hidden = true;

// Submit enabled once first and last name have at least 1 character in each field.
const nameComplete = { f: false, l: false };
fNameField.addEventListener("change", (e) => {
    if (e.target.textLength >= 1) nameComplete.f = true;
});
lNameField.addEventListener("change", (e) => {
    if (e.target.textLength >= 1) nameComplete.l = true;
});
if (nameComplete.f && nameComplete.l) submitButton.disabled = false;

// If checkbox is checked, display input for email address.
if (subCheckField.checked) {
    emailField.hidden = false;
    emailFieldLabel.hidden = false;
}
