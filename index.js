let emailInput = document.getElementById("email-input");
let fnameInput = document.getElementById("fname-input");
let lnameInput = document.getElementById("lname-input");
let passInput = document.getElementById("pass-input");
let confirmPassInput = document.getElementById("confirm-pass-input");
let mobInput = document.getElementById("mob-input");
let submitBtn = document.getElementById("submit-btn");
let invalidEmail = document.getElementById("invalid-email");
let invalidFname = document.getElementById("invalid-fname");
let invalidLname = document.getElementById("invalid-lname");
let invalidPass = document.getElementById("invalid-pass");
let invalidConfirmPass = document.getElementById("invalid-confirm-pass");
let invalidMob = document.getElementById(`invalid-mob`);

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const SPECIAL_CHAR_REGEX = /[!@#$%^&*(),.?":{}|<>~`+=\-[\]\\';_/]/;

let isEmailValid = false;
let isEmailEmpty = false;
let isFnameValid = false;
let isFnameEmpty = false;
let isLnameValid = false;
let isLnameEmpty = false;
let isPassValid = false;
let isPassEmpty = false;
let isMobValid = false;
let isMobileEmpty = false;

emailInput.addEventListener("blur", (e) => {
    let emailText = e.target.value;
    if (EMAIL_REGEX.test(emailText)) {
        isEmailValid = true;
        invalidEmail.style.display = "none";
    } else {
        isEmailValid = false;
        invalidEmail.style.display = "inline-block";
        if (emailText.length == 0) {
            invalidEmail.style.display = "none";
            isEmailEmpty = true;
        } else {
            isEmailEmpty = false;
        }
    }
});
fnameInput.addEventListener(`input`, (e) => {
    const fnameText = e.target.value;
    const hasNumber = /\d/.test(fnameText);
    const hasSpecialChar = SPECIAL_CHAR_REGEX.test(fnameText);
    if (!hasNumber && !hasSpecialChar && fnameText.length < 10) {
        isFnameValid = true;
        invalidFname.style.display = "none";
    } else {
        isFnameValid = false;
        invalidFname.style.display = "inline-block";
    }
});
lnameInput.addEventListener(`input`, (e) => {
    const lnameText = e.target.value;
    const hasNumber = /\d/.test(lnameText);
    const hasSpecialChar = SPECIAL_CHAR_REGEX.test(lnameText);
    if (!hasNumber && !hasSpecialChar && lnameText.length < 10) {
        isLnameValid = true;
        invalidLname.style.display = "none";
    } else {
        isLnameValid = false;
        invalidLname.style.display = "inline-block";
    }
});
passInput.addEventListener(`blur`, (e) => {});
confirmPassInput.addEventListener(`blur`, (e) => {});
mobInput.addEventListener(`input`, (e) => {});

submitBtn.onclick = function () {};
