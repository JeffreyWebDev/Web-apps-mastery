const cart = () => {
    let listCartHTML = document.querySelector('.listCart');
    let iconCart = document.querySelector('.icon-cart');
    let iconCartSpan = iconCart.querySelector('span');
    let body = document.querySelector('body');
    let closeCart = document.querySelector('.close');
    let cart = [];

    // open and close tab
    iconCart.addEventListener('click', () => {
        body.classList.toggle('activeTabCart');
    })
    closeCart.addEventListener('click', () => {
        body.classList.toggle('activeTabCart');
    })

    // Navbar functionalities
    const mainMenu = document.getElementById("mainMenu");

    function showMenu() {   
        mainMenu.style.left = "0";
    }

    function hideMenu() {   
        mainMenu.style.left = "100%";
    }

    showMenu();
    hideMenu();

    // Fetch products data
    fetch('./JS/products.json')
    .then(response => response.json())
    .then(data => {
        const products = data.categories.flatMap(category => category.products); // Flatten the products array
        const setProductInCart = (idProduct, value) => {
            let positionThisProductInCart = cart.findIndex((value) => value.product_id == idProduct);
            if(value <= 0){
                cart.splice(positionThisProductInCart, 1);
            }else if(positionThisProductInCart < 0){
                cart.push({
                    product_id: idProduct,
                    quantity: 1
                });
            }else{
                cart[positionThisProductInCart].quantity = value;
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            addCartToHTML(products); // Pass the products array to addCartToHTML
        }

        const addCartToHTML = (products) => {
            listCartHTML.innerHTML = '';
            let totalQuantity = 0;
            if(cart.length > 0){
                cart.forEach(item => {
                    totalQuantity = totalQuantity +  item.quantity;
                    let newItem = document.createElement('div');
                    newItem.classList.add('item');
                    newItem.dataset.id = item.product_id;

                    let positionProduct = products.findIndex((value) => value.id == item.product_id);
                    let info = products[positionProduct];
                    listCartHTML.appendChild(newItem);
                    newItem.innerHTML = `
                    <div class="image">
                            <img src="${info.image}">
                        </div>
                        <div class="name">
                        ${info.name}
                        </div>
                        <div class="totalPrice">$${info.price * item.quantity}</div>
                        <div class="quantity">
                            <span class="minus" data-id="${info.id}"><</span>
                            <span>${item.quantity}</span>
                            <span class="plus" data-id="${info.id}">></span>
                        </div>
                    `;
                })
            }
            iconCartSpan.innerText = totalQuantity;
        }

        document.addEventListener('click', (event) => {
            let buttonClick = event.target;
            let idProduct = buttonClick.dataset.id;
            let quantity = null;
            let positionProductInCart = cart.findIndex((value) => value.product_id == idProduct);
            switch (true) {
                case (buttonClick.classList.contains('addCart')):
                    quantity = (positionProductInCart < 0) ? 1 : cart[positionProductInCart].quantity+1;
                    setProductInCart(idProduct, quantity);
                    break;
                case (buttonClick.classList.contains('minus')):
                    quantity = cart[positionProductInCart].quantity-1;
                    setProductInCart(idProduct, quantity);
                    break;
                case (buttonClick.classList.contains('plus')):
                    quantity = cart[positionProductInCart].quantity+1;
                    setProductInCart(idProduct, quantity);
                    break;
                default:
                    break;
            }
        })

        const initApp = () => {
            if(localStorage.getItem('cart')){
                cart = JSON.parse(localStorage.getItem('cart'));
                addCartToHTML(products);
            }
        }
        initApp();
    });
}
export default cart;
