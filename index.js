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

let isEmailValid =  false;
let isEmailEmpty =  true;
let isFnameValid =  false;
let isFnameEmpty =  true;
let isLnameValid =  false;
let isLnameEmpty =  true;
let isPassValid =   false;
let isPassEmpty =   true;
let isConfirmPassValid = false;
let isConfirmPassEmpty = true;
let isMobValid =    false;
let isMobileEmpty = true;

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
passInput.addEventListener(`input`, (e) => {
    const passText = e.target.value;
    const hasNumber = /\d/.test(passText);
    const hasLowerCase = /[a-z]/.test(passText);
    const hasUpperCase = /[A-Z]/.test(passText);
    const hasSpecialChar = SPECIAL_CHAR_REGEX.test(passText);
    if (
        hasNumber &&
        hasSpecialChar &&
        hasLowerCase &&
        hasUpperCase &&
        passText.length < 8
    ) {
        isPassValid = true;
        invalidPass.style.display = 'none';
    }
    else {
        isPassValid = false; 
        invalidPass.style.display = 'inline-block';
    }
});
confirmPassInput.addEventListener(`blur`, (e) => {
    const confirmPassText = e.target.value;
    const compringPass = passInput.value;
    if (confirmPassText == compringPass)
    {
        isConfirmPassValid = true;
        invalidConfirmPass.style.display = 'none';
    }
    else {
        isConfirmPassValid = false;
        invalidConfirmPass.style.display = 'inline-block'
    }
});
mobInput.addEventListener(`input`, (e) => {
    
});

submitBtn.onclick = function () {};
