let listCart = []

function checkCart() {
    var cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('listCart='))
    if(cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1])
    }
}
checkCart()
addCartToHTML()
function addCartToHTML() {
    let listCartHTML = document.querySelector('.returnCart .list')
    listCartHTML.innerHTML = ''
    let totalQuantityHTML = document.querySelector('.totalQuantity')
    let totalPriceHTML = document.querySelector('.totalPrice')

    let totalQuantity = 0
    let totalPrice = 0
    if(listCart) {
        listCart.forEach(product => {
            if(product) {
                let newP = document.createElement('div')
                newP.classList.add('item')
                newP.innerHTML = 
                `<img src="${product.image}" alt="">
                <div class="info">
                    <div class="name">${product.name}</div>
                    <div class="price">${product.price}/product</div>
                </div>
                <div class="quantity">${product.quantity}</div>
                <div class="returnPrice">
                ${product.price * product.quantity}
                </div>`
                listCartHTML.appendChild(newP)
                totalQuantity = totalQuantity + product.quantity
                totalPrice = totalPrice + (product.price * product.quantity)
            }
        })
    }
    totalQuantityHTML.innerText = totalQuantity
    totalPriceHTML.innerText = totalPrice + 'VNĐ'
}

function saveCartToLocalStorage() {
    localStorage.setItem('listCart', JSON.stringify(listCart))
}

saveCartToLocalStorage();



let checkoutButton = document.querySelector('.buttonCheckout');

checkoutButton.addEventListener('click', function() {
    let fullNameInput = document.querySelector('#fullName').value;
    let phoneNumberInput = document.querySelector('#phoneNumber').value;
    let addressInput = document.querySelector('#address').value;
    let citySelect = document.querySelector('#city').value;

    if (fullNameInput == '' || phoneNumberInput == '' || addressInput == '' || citySelect == '') {
        alert('Please fill out the information to complete the checkout!');
    } else {
        alert('We have received your order information, please come to the payment page to complete the process!');
        window.location.href = 'pay.html';
    }
});