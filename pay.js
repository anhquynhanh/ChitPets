const cashButton = document.querySelector('.cash button');
const transButton = document.querySelector('.trans button');

cashButton.addEventListener('click', function() {
    alert('Please pay the money when receiving the goods.');
    window.location.href = 'home.html';
});

transButton.addEventListener('click', function() {
    alert('After successful transfer, please take the transaction and send it to Zalo: (+84) 829 400 390 for us to confirm the application.');
    window.location.href = 'home.html';
});
