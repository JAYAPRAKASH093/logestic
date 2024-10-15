document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    let valid = true;

    // Username Validation
    const username = document.getElementById('username').value;
    if (!username) {
        document.getElementById('usernameError').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('usernameError').classList.add('hidden');
    }

    // Email Validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById('emailError').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('emailError').classList.add('hidden');
    }

    // Full Name Validation
    const fullName = document.getElementById('full-name').value;
    if (!fullName) {
        document.getElementById('fullNameError').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('fullNameError').classList.add('hidden');
    }

    // City Validation
    const city = document.getElementById('city').value;
    if (!city) {
        document.getElementById('cityError').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('cityError').classList.add('hidden');
    }

    // State Validation
    const state = document.getElementById('state').value;
    if (!state) {
        document.getElementById('stateError').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('stateError').classList.add('hidden');
    }

    // Country Validation
    const country = document.getElementById('country').value;
    if (!country) {
        document.getElementById('countryError').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('countryError').classList.add('hidden');
    }

    // Pincode Validation (must be 6 digits)
    const pincode = document.getElementById('pincode').value;
    if (!/^\d{6}$/.test(pincode)) {
        document.getElementById('pincodeError').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('pincodeError').classList.add('hidden');
    }

    // Mobile Number Validation (must be 10 digits)
    const mobileNumber = document.getElementById('mobile-number').value;
    if (!/^\d{10}$/.test(mobileNumber)) {
        document.getElementById('mobileNumberError').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('mobileNumberError').classList.add('hidden');
    }

    // Password Validation
    const password = document.getElementById('new-password').value;
    if (!password) {
        document.getElementById('passwordError').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('passwordError').classList.add('hidden');
    }

    // Confirm Password Validation
    const confirmPassword = document.getElementById('re-enter-password').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('confirmPasswordError').classList.add('hidden');
    }

    // Terms and Conditions Validation
    const acceptTerms = document.getElementById('accept-terms').checked;
    if (!acceptTerms) {
        document.getElementById('termsError').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('termsError').classList.add('hidden');
    }

    const marketingConsent = document.getElementById('marketing-consent').checked;
    if(!marketingConsent) {
        document.getElementById('marketingConsentError').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('marketingConsentError').classList.add('hidden');
    }

    // If all fields are valid, redirect to the login page
    if (valid) {
        window.location.href = 'login.html';
    }
});