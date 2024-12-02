let cart = [];

// Function to add item to cart
function addToCart(productId, productName, productPrice) {
    const product = {
        id: productId,
        name: productName,
        price: parseFloat(productPrice)
    };
    cart.push(product);
    updateCartUI();
}

// Function to update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;

    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElem = document.getElementById('total-price');

    // Clear current cart items
    cartItemsList.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });

    totalPriceElem.textContent = total.toFixed(2);
}

// Function to checkout (just a simulation)
function checkout() {
    alert("Thank you for your purchase!");
    cart = []; // Clear cart
    updateCartUI();
}

// Adding event listeners to product buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        const name = this.getAttribute('data-name');
        const price = this.getAttribute('data-price');
        addToCart(id, name, price);
    });
});

// Function to toggle the cart popup visibility
function toggleCartPopup() {
    const popup = document.getElementById('cart-popup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}
