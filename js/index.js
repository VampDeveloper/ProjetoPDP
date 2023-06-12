function validateFields() {
  
    const passwordValid = isPasswordValid();
    document.getElementById("si-button").disabled = !emailValid || !passwordValid;

}

function isEmailValid() {
    const email = document.getElementById("si-email").value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid() {
    const password = document.getElementById("si-password").value;
    if (!password) {
        return false;
    }
    return true;
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}