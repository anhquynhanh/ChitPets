let productAPI = 'http://localhost:3000/products';

function start() {
    getProducts(renderProducts);
}

start();

function getProducts(callback) {
    fetch (productAPI).then(function(response) {
        return response.json();
    }).then(callback);
}

function renderProducts(products) {
    let listProductsBlock = document.querySelector('.listProduct');
    let html = products.map(function(product) {
        return `
        <div class="item">
            <img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">${product.price}</div>
            <button onclick="addCart(${product.id})">Add To Cart</button>
        </div>
        `;
    });
    listProductsBlock.innerHTML = html.join('');
}

// Cart

let iconCart = document.querySelector('.iconCart');
let cart = document.querySelector('.cart');
let container = document.querySelector('.container');
let close = document.querySelector('.close');

iconCart.addEventListener('click', () => {
    cart.style.right = '0';
    container.style.transform = 'translateX(0%)';
})
close.addEventListener('click', () => {
    cart.style.right = '-100%';
    container.style.transform = 'translateX(0%)';
})

let cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('products='));
if (cookieValue) {
    let products = JSON.parse(cookieValue.split('=')[1]);
} else {
    let products = [];
}