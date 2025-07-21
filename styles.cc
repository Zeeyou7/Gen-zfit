/* General */
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  color: #fff;
}

header, nav, main, footer {
  padding: 20px;
  text-align: center;
}

nav {
  background-color: rgba(0, 0, 0, 0.8);
}

nav a {
  margin: 0 10px;
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
}

/* Page-specific backgrounds */
body.home {
  background: linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b);
}

body.shop {
  background: linear-gradient(to right, #141e30, #243b55);
}

body.cart {
  background: linear-gradient(to right, #42275a, #734b6d);
}

body.contact {
  background: linear-gradient(to right, #485563, #29323c);
}

body.gallery {
  background: linear-gradient(to right, #1e3c72, #2a5298);
}

/* Product grid */
.products {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.product {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  width: 200px;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.4);
}

.product img {
  width: 100%;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #ff4757;
}

ul#cart-items {
  list-style-type: none;
  padding: 0;
}
