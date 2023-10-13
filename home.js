let signUpButton = document.querySelector('#signupButton');

signUpButton.addEventListener('click', function() {
    let email = document.querySelector('#emailInput').value;
    if (email == '') {
        alert('You have not yet entered the email');
    } else {
        let emailInput = document.querySelector('input[name="inputHome"]').value;
        alert('Thank you for giving us your email!');
    }
});