// Save cart to localStorage
function addToCart(product, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ product, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(${product} added to cart!);
}

// Load cart items on the cart page
function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartList = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");

  if (!cartList || !totalElement) return;

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = ${item.product} - Rs. ${item.price};
    cartList.appendChild(li);
    total += item.price;
  });

  totalElement.textContent = Total: Rs. ${total};
}

// Fake order placement
function placeOrder() {
  alert("Thank you for your order! Your order has been placed.");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

// Load cart when the page loads
window.onload = loadCart;
