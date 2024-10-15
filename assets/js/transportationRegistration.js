
document.getElementById('transporterRegisterForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();
    
    // Clear previous error messages
    let errors = document.querySelectorAll('.text-red-500');
    errors.forEach(function(error) {
        error.classList.add('hidden');
    });

    // Flag to track if form is valid
    let formIsValid = true;

    // Validate username
    let username = document.getElementById('username').value.trim();
    if (username === '') {
        document.getElementById('usernameError').classList.remove('hidden');
        formIsValid = false;
    }

    // Validate email
    let email = document.getElementById('email').value.trim();
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').classList.remove('hidden');
        formIsValid = false;
    }

    // Validate full name
    let fullName = document.getElementById('full-name').value.trim();
    if (fullName === '') {
        document.getElementById('fullNameError').classList.remove('hidden');
        formIsValid = false;
    }

    // Validate company name
    let companyName = document.getElementById('company-name').value.trim();
    if (companyName === '') {
        document.getElementById('companyNameError').classList.remove('hidden');
        formIsValid = false;
    }

    // Validate transporter license number
    let licenseNumber = document.getElementById('license-number').value.trim();
    if (licenseNumber === '') {
        document.getElementById('licenseNumberError').classList.remove('hidden');
        formIsValid = false;
    }

    // Validate fleet size
    let fleetSize = document.getElementById('fleet-size').value.trim();
    if (fleetSize === '') {
        document.getElementById('fleetSizeError').classList.remove('hidden');
        formIsValid = false;
    }

    // Validate vehicle types
    let vehicleTypes = document.getElementById('vehicle-types').selectedOptions;
    if (vehicleTypes.length === 0) {
        document.getElementById('vehicleTypesError').classList.remove('hidden');
        formIsValid = false;
    }

    // Validate insurance details
    let insuranceDetails = document.getElementById('insurance-details').value.trim();
    if (insuranceDetails === '') {
        document.getElementById('insuranceDetailsError').classList.remove('hidden');
        formIsValid = false;
    }

    // Validate PAN/TAX ID
    let panTaxId = document.getElementById('pan-tax-id').value.trim();
    if (panTaxId === '') {
        document.getElementById('panTaxIdError').classList.remove('hidden');
        formIsValid = false;
    }

    // Validate bank details
    let bankDetails = document.getElementById('bank-details').value.trim();
    if (bankDetails === '') {
        document.getElementById('bankDetailsError').classList.remove('hidden');
        formIsValid = false;
    }

    // Validate contact person name
    let contactPerson = document.getElementById('contact-person').value.trim();
    if (contactPerson === '') {
        document.getElementById('contactPersonError').classList.remove('hidden');
        formIsValid = false;
    }

    // Validate contact person mobile number
    let contactMobile = document.getElementById('contact-mobile').value.trim();
    let mobilePattern = /^[+]?[0-9]{10,13}$/;
    if (!mobilePattern.test(contactMobile)) {
        document.getElementById('contactMobileError').classList.remove('hidden');
        formIsValid = false;
    }

    // Validate business address
    let businessAddress = document.getElementById('business-address').value.trim();
    if (businessAddress === '') {
        document.getElementById('businessAddressError').classList.remove('hidden');
        formIsValid = false;
    }

    // Validate password
    let password = document.getElementById('new-password').value.trim();
    if (password === '') {
        document.getElementById('passwordError').classList.remove('hidden');
        formIsValid = false;
    }

    // Validate confirm password
    let confirmPassword = document.getElementById('re-enter-password').value.trim();
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').classList.remove('hidden');
        formIsValid = false;
    }

    // Validate terms acceptance
    let termsAccepted = document.getElementById('accept-terms').checked;
    if (!termsAccepted) {
        document.getElementById('termsError').classList.remove('hidden');
        formIsValid = false;
    }

    // If form is valid, submit the form
    if (formIsValid) {
        window.location.href='transportationLogin.html'
    }
});
