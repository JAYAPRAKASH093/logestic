document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    let valid = true;

const username = document.getElementById('username').value;
    if (!username) {
        document.getElementById('usernameError').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('usernameError').classList.add('hidden');
    }

// Password Validation
const password = document.getElementById('password').value;
    if (!password) {
        document.getElementById('passwordError').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('passwordError').classList.add('hidden');
    }

    if (valid){
        window.location.href="order.html";
        document.querySelector('form').reset();
    }
});