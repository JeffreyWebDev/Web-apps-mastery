import cart from './cart.js';

let listProduct = document.getElementById('listProduct');
let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

const loadTemplate = () => {
    fetch('../template.html') // Updated to relative path
    .then(response => response.text())
    .then(html => {
        app.innerHTML = html;
        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = null;
        cart();
        initApp();
    })
}
loadTemplate();

const initApp = () => {
    // Fetch products data
    fetch('./JS/products.json')
    .then(response => response.json())
    .then(data => {
        const products = data.categories.flatMap(category => category.products); // Flatten the products array
        let productId = new URLSearchParams(window.location.search).get('id');
        let thisProduct = products.find(value => value.id == productId); // Use find instead of filter
        if(!thisProduct){
            window.location.href = "/"; // Redirect if product not found
        }

        let detail = document.querySelector('.detail');
        detail.querySelector('.image img').src = thisProduct.image;
        detail.querySelector('.name').innerText = thisProduct.name;
        detail.querySelector('.price').innerText = '$' + thisProduct.price;
        detail.querySelector('.description').innerText = thisProduct.description; // Corrected
        detail.querySelector('.addCart').dataset.id = thisProduct.id;

        // Display other products from the same category, excluding the selected product
        let listProductHTML = document.querySelector('.listProductDetail');
        let categoryProducts = data.categories.find(category => category.products.includes(thisProduct)).products; // Get products from the same category

        categoryProducts.forEach(product => {
            if (product.id !== thisProduct.id) { // Exclude the selected product
                let newProduct = document.createElement('div');
                newProduct.classList.add('item');
                newProduct.innerHTML = 
                `<a href="/detail.html?id=${product.id}">
                    <img src="${product.image}">
                </a>
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button 
                    class="addCart" 
                    data-id='${product.id}'>
                        Add To Cart
                </button>`;
                listProductHTML.appendChild(newProduct);
            }
        });
    });
}
