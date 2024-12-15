document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
    validateForm();
});

function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    clearErrors();

    let valid = true;

    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Le nom est requis.');
        valid = false;
    }

    if (emailInput.value.trim() === '') {
        showError(emailInput, 'L\'email est requis.');
        valid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Veuillez entrer une adresse email valide.');
        valid = false;
    }

    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Le message est requis.');
        valid = false;
    }

    if (valid) {
        alert('Le formulaire est valide ! (Remplacez cela par une autre fonctionnalité.)');
    }
}

function showError(input, message) {
    const errorMsg = input.nextElementSibling;
    errorMsg.innerText = message;
    errorMsg.style.display = 'block';
    input.style.borderColor = '#E74C3C';
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-msg');
    const inputs = document.querySelectorAll('input, textarea');
    
    errorMessages.forEach((msg) => msg.style.display = 'none');
    inputs.forEach((input) => input.style.borderColor = '#E0E0E0');
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
