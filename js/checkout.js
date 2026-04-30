function renderCheckout(){
  const bag = getBag();
  const area = document.getElementById("checkoutItems");
  const subtotalEl = document.getElementById("subtotal");
  const taxEl = document.getElementById("taxTotal");
  const shippingEl = document.getElementById("shippingTotal");
  const totalEl = document.getElementById("checkoutTotal");

  const subtotal = bag.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.13;
  const shipping = subtotal === 0 ? 0 : (subtotal >= 500 ? 0 : 19.99);
  const total = subtotal + tax + shipping;

  if(!bag.length){
    area.innerHTML = '<p class="product-meta">Your bag is empty. Go to the collection page to add jewellery.</p>';
  } else {
    area.innerHTML = bag.map(item => `
      <div class="checkout-product">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <strong>${item.name}</strong>
          <p class="product-meta">${item.colour} · ${item.size}</p>
        </div>
        <strong>${money(item.price)}</strong>
      </div>
    `).join("");
  }

  subtotalEl.textContent = money(subtotal);
  taxEl.textContent = money(tax.toFixed(2));
  shippingEl.textContent = shipping === 0 && subtotal > 0 ? "Free" : money(shipping.toFixed(2));
  totalEl.textContent = money(total.toFixed(2));
}

document.addEventListener("DOMContentLoaded", function(){
  renderCheckout();
  document.getElementById("checkoutForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("successMessage").style.display = "block";
    localStorage.removeItem("solaraBag");
    renderBag();
    renderCheckout();
  });
});