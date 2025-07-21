
let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  alert(product + " added to cart!");
  localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  let container = document.getElementById('cart-items');
  if (!container) return;
  container.innerHTML = '';
  let total = 0;
  cartItems.forEach((item, index) => {
    total += item.price;
    container.innerHTML += `
      <div>
        ${item.product} - PKR ${item.price}
        <button onclick="removeItem(${index})">Remove</button>
      </div>`;
  });
  container.innerHTML += `<p>Total: PKR ${total}</p>`;
}

function removeItem(index) {
  let cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  cartItems.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  renderCart();
}

function checkout() {
  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  const payment = document.querySelector('input[name="payment"]:checked').value;
  if (payment === 'cod') {
    const message = encodeURIComponent("Hi, I want to order:\n" + cartItems.map(item => item.product + " - PKR " + item.price).join("\n"));
    window.open("https://wa.me/923177272773?text=" + message, "_blank");
  } else {
    alert("Visa checkout is not set up yet.");
  }
}

window.onload = renderCart;
