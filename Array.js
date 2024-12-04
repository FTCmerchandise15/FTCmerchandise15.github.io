// Get references to DOM elements
const cartButton = document.getElementById('cart-button');
const cartDropdown = document.getElementById('cart-dropdown');
const checkoutButton = document.getElementById('checkout-button');
const paymentForm = document.getElementById('payment-form');
const cartCount = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const checkoutForm = document.getElementById('checkout-form');

// Initialize the cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display cart items in the dropdown
function displayCart() {
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <p>${item.name} - $${item.price} x ${item.quantity}</p>
            <button class="remove-item" data-id="${item.id}">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemElement);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
    cartCount.textContent = cart.length;

    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            removeFromCart(id);
        });
    });
}

// Add item to cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const id = button.getAttribute('data-id');
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));

        // Check if item already exists in cart
        const existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    });
});

// Remove item from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Show/Hide Cart Dropdown
cartButton.addEventListener('click', () => {
    cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
    checkoutForm.style.display = 'none'; // Hide checkout form initially
});

// Proceed to checkout
checkoutButton.addEventListener('click', () => {
    checkoutForm.style.display = 'block';
    cartDropdown.style.display = 'none';
});

// Handle checkout form submission
paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    if (name && address) {
        alert(`Thank you for your purchase, ${name}! Your order will be shipped to ${address}.`);
        cart = []; // Clear cart
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
        paymentForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Initial cart display
displayCart();
