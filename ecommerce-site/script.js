function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({name, price});
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(name + " added to cart!");
}

function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartItems = document.getElementById('cart-items');
  let total = 0;
  cartItems.innerHTML = '';
  cart.forEach(item => {
    let div = document.createElement('div');
    div.textContent = item.name + " - $" + item.price;
    cartItems.appendChild(div);
    total += item.price;
  });
  document.getElementById('total').textContent = "Total: $" + total.toFixed(2);
}

if (document.getElementById('cart-items')) {
  displayCart();
}
