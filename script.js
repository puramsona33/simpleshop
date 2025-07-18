let cart = [];
let total = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  total += price;
  document.getElementById("cart-count").textContent = cart.length;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });

  document.getElementById("total").textContent = total.toFixed(2);
}

// Toggle cart view
document.getElementById("cart-btn").addEventListener("click", () => {
  const cartSection = document.getElementById("cart-section");
  cartSection.classList.toggle("hidden");
});
