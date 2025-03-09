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
            // initApp();
        })
    }
    loadTemplate();

    // Function to check and retrieve cart data from cookies
    let listCart = [];
    function checkCart() {
        const cookieValue = document.cookie
            .split("; ")
            .find(row => row.startsWith("listCart="));
        if (cookieValue) {
            // Correctly parse the cookie value
            listCart = JSON.parse(cookieValue.split("=")[1]);
        }
    }

    // Call the function to check the cart
    checkCart();
    addInfoToHTML();

    // Function to add cart data to the HTML
    function addInfoToHTML() {
        let listCartHTML = document.querySelector(".returnCart .list");
        listCartHTML.innerHTML = "";
        let totalQuantityHTML = document.querySelector(".totalQuantity");
        let totalPriceHTML = document.querySelector(".totalPrice");

        let totalQuantity = 0;
        let totalPrice = 0;

        if(listCart){
            listCart.forEach(product => {
                if(product){
                    let newCart = document.createElement('div');
                    newCart.classList.add('item');
                    newCart.innerHTML = 
                        `<img src="${product.image}">
                        <div class="info">
                            <div class="name">${product.name}</div>
                            <div class="price">$${product.price}/1 product</div>
                        </div>
                        <div class="quantity">${product.quantity}</div>
                        <div class="returnPrice">$${product.price * product.quantity}</div>`;
                    listCartHTML.appendChild(newCart);
                    totalQuantity = totalQuantity + product.quantity;
                    totalPrice = totalPrice + (product.price * product.quantity);
                }
            })
        }

        totalQuantityHTML.innerText = totalQuantity;
        totalPriceHTML.innerText = "$" + totalPrice.toFixed(2);
    }
