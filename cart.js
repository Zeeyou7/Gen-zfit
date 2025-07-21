let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(name + " added to cart!");
}

function updateCartCount() {
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = cart.length);
}

function displayCartItems() {
  const list = document.getElementById('cart-items');
  const total = document.getElementById('cart-total');
  if (!list) return;
  list.innerHTML = '';
  let sum = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.name + ' - ' + item.price + ' PKR';
    list.appendChild(li);
    sum += item.price;
  });
  total.textContent = sum;
}

function displayCheckoutTotal() {
  const el = document.getElementById('checkout-total');
  if (!el) return;
  let sum = 0;
  cart.forEach(item => sum += item.price);
  el.textContent = sum;
}

function placeOrder() {
  const payment = document.querySelector('input[name="payment"]:checked').value;
  const sum = cart.reduce((total, item) => total + item.price, 0);
  const summary = cart.map(item => `${item.name}`).join(', ');
  if (payment === 'cod') {
    const message = `Hi, I want to place this order: ${summary} for ${sum} PKR (Cash on Delivery)`;
    const whatsappURL = `https://wa.me/923177272773?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  } else {
    alert("Visa card processing coming soon...");
  }
}

updateCartCount();
displayCartItems();
displayCheckoutTotal();