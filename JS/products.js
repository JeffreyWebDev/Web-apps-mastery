import cart from './cart.js';

let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

// load layout file
const loadTemplate = () => {
    fetch('../template.html')
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
        const categories = data.categories; // Get categories
        let listProductHTML = document.querySelector('.listProduct');
        listProductHTML.innerHTML = null;

        categories.forEach(category => {
            // Create a section for each category
            let categorySection = document.createElement('div');
            categorySection.classList.add('category-grid');

            // Add category name
            let categoryName = document.createElement('h1');
            categoryName.innerText = category.name;
            categorySection.appendChild(categoryName);

            // Create a container for products
            let productsContainer = document.createElement('div');
            productsContainer.classList.add('products-container');

            category.products.forEach(product => {
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
                productsContainer.appendChild(newProduct);
            });

            categorySection.appendChild(productsContainer);
            listProductHTML.appendChild(categorySection);
        });
    });
}
